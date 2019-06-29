/** Author: Jesse Howell
 * 
 *  For CS 2550 at UVU
 */

var contentDivs = ['announcementsContent',
                    'sacramentContent',
                    'leadershipContent',
                    'spotlightsContent',
                    'archivesContent'];

$(document).ready(function()
{
    $('.clickable').eq(0).on('click', function(event)
    {
        changeVisible('announcementsContent');
    });
    $('.clickable').eq(1).on('click', function(event)
    {
        changeVisible('sacramentContent');
    });
    $('.clickable').eq(2).on('click', function(event)
    {
        changeVisible('leadershipContent');
    });
    $('.clickable').eq(3).on('click', function(event)
    {
        changeVisible('spotlightsContent');
    });
    $('.clickable').eq(4).on('click', function(event)
    {
        changeVisible('archivesContent');
    });

    $.getJSON('https://raw.githubusercontent.com/eisbaerBorealis/eisbaerBorealis.github.io/master/21st-ward/announcements.json',
        function(data)
        {
            announcements = data;
            displayAnnouncementsFromJSON(announcements);
        });

    $.getJSON('https://raw.githubusercontent.com/eisbaerBorealis/eisbaerBorealis.github.io/master/21st-ward/current-sacrament.json',
        function(data)
        {
            sacrament = data;
            displayCurrentSacramentFromJSON(sacrament);
        });
});

function changeVisible(section)
{
    for(var div of contentDivs)
    {
        if(div !== section)
        {
            $('#' + div).slideUp('slow');
        }
        else
        {
            $('#' + div).slideToggle('slow');
        }
    }
}

function displayAnnouncementsFromJSON(json)
{
    var announceHTML = '';

    for(var announcement of json.other)
    {
        announceHTML += '<h3 class="otherAnnounce">' + announcement.precursor +
        '</h3><p>' + announcement.message + '</p>';
    }

    announceHTML += '<h2>Upcoming Events</h2>';

    for(var event of json.events)
    {
        // title, date, time, location, info
        announceHTML += '<h3 class="event">' + event.title +
        '</h3><ul class="eventDetails layer2">' + 
        '<li>Date: ' + event.date +
        '</li><li>Time: ' + event.time +
        '</li><li>Location: ' + event.location.name + '</li>';
//console.log("DEBUG! event.location.name is " + event.location.name)
//console.log("DEBUG! event.location is " + event.location)

        if(event.location.address != null)
        {
            announceHTML += '<li>Address: ' + event.location.address + '</li>'
        }

        announceHTML += '<li>Info: ' + event.info + '</li></ul>';
    } //*/

    $('#announcementsContent').html(announceHTML);
}

function displayCurrentSacramentFromJSON(json)
{
    var announceHTML = '';

    //  Add to HTML here

    $('#sacramentContent').html(announceHTML);
}

/*function addTooltips()
{
    // $('     ').attr('title', '     ');
    $('.clickable').eq(0).attr('title', 'Relevant programming jobs, most recent listed first.');
    $('.clickable').eq(1).attr('title', 'Additional abilities useful for a programmer.');
    $('.clickable').eq(2).attr('title', 'Other significant achievements.');
    $('.clickable').eq(3).attr('title', 'Leaders familiar with my capabilities.');
    $('li').eq(5).attr('title', 'A programming language which uses Picos. Very useful for Internet of Things.');
    $('.reference').eq(0).attr('title', 'One of the creators of the KRL language.');
    $('#otherContent').attr('title', 'Served Mission in Switzerland, speaking German.');
    $('h5').eq(0).attr('title', '"Eisbaer" is German for polar bear, and "Borealis" is Latin meaning "of the North".');
} // */