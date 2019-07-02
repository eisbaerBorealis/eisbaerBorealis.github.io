/** Author: Jesse Howell
 * 
 *  
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

    $.getJSON('https://raw.githubusercontent.com/eisbaerBorealis/eisbaerBorealis.github.io/master/21st-ward/leadership.json',
        function(data)
        {
            leadership = data;
            displayLeadershipFromJSON(leadership);
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
        announceHTML += '<h3 class="event">' + event.title +
        '</h3><ul class="eventDetails layer2">' + 
        '<li>Date: ' + event.date +
        '</li><li>Time: ' + event.time +
        '</li><li>Location: ' + event.location.name + '</li>';

        if(event.location.address != null)
        {
            announceHTML += '<li>Address: ' + event.location.address + '</li>'
        }

        announceHTML += '<li>Info: ' + event.info + '</li></ul>';
    }

    $('#announcementsContent').html(announceHTML);
}

function displayCurrentSacramentFromJSON(json)
{
    var announceHTML = '';

    announceHTML += '<h2 class="center">' + json.header.wardInfo + '</h2>';
    announceHTML += '<p class="center">' + json.header.quote + '</p>';
    announceHTML += '<p class="center">' + json.header.date + '</p>';
    announceHTML += '<p class="center">' + json.header.specialDay + '</p>';

    announceHTML += '<table>';
    for(var item of json.program)
    {
        announceHTML += '<tr>';
        if(item.left != null)
        {
            announceHTML += '<td>' + item.left + '</td><td class="right">' + item.right + '</td>';
        }
        else
        {
            announceHTML += '<td colspan="2" class="center">' + item.center + '</td>';
        }
        announceHTML += '</tr>';
    }
    announceHTML += '</table>';

    $('#sacramentContent').html(announceHTML);
}

function displayLeadershipFromJSON(json)
{
    var leadershipHTML = '';

    leadershipHTML += '<table>';
    for(var leader of json.leadership)
    {
        leadershipHTML += '<tr><td>' + leader.calling + '</td><td>' + leader.name + '</td><td>' + leader.phone + '</td></tr>';
    }
    leadershipHTML += '</table>';

    leadershipHTML += '<h2>Other Info:</h2>';

    leadershipHTML += '<span class="center"><a href="' + json.other.facebookUrl + '">Facebook Page: ';
    leadershipHTML += json.other.facebookTitle + '</a>';

    leadershipHTML += '<p class="center">Facebook QR Code:</p><div class="center-image"><img src="';
    leadershipHTML += json.other.facebookQr;
    leadershipHTML += '" alt="QR code for Facebook group"></div>';

    leadershipHTML += '<p class="center">QR Code for this page:</p><div class="center-image"><img class="center" src="';
    leadershipHTML += json.other.pageQr;
    leadershipHTML += '" alt="QR code for this page"></div>';

    leadershipHTML += '<p>This page is being updated by ' + json.other.curatorName;
    leadershipHTML += '. Please email ' + json.other.curatorEmail;
    leadershipHTML += ' with questions, comments, requests, or suggestions.</p>';//*/

    $('#leadershipContent').html(leadershipHTML);
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