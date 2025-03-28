// var newSvgHeight = 620;
var newSvgHeight = 520;
var newSvgWidth = 836;

var buildings = [
  {
      'name' : 'SUS2',
      'width' : 756,
      'height' : 180,
      'parts' : {
          'outerWalls' : [
              0, 47,
              47, 0,
              756, 0,
              756, 180,
              0, 180,
              0, 47
          ],
          'innerWalls' : [
              [477, 180,
               477, 168,
               505, 168,
               505, 180],
              [538, 0,
               538, 30,
               686, 30,
               686, 0,
               686, 180],
               [241.6, 20.4,
                249.5, 20.4],
               [258.6, 20.4,
                266.5, 20.4],
               [241.6, 150.8,
                249.5, 150.8],
               [258.6, 150.8,
                266.5, 150.8],
          ],
          'racking' : {
              'width' : 4.1,
              'depth' : 4,
              'direction' : 'vertical',
              'order' : 'desc',
              'aisles' : [
                  {
                      'name' : '2C46',
                      'startX' : 148,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 3,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C45',
                      'startX' : 152,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 3,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C44',
                      'startX' : 165,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 3,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C43',
                      'startX' : 169,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 3,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C42',
                      'startX' : 182,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C41',
                      'startX' : 186,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C40',
                      'startX' : 199,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C39',
                      'startX' : 203,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C38',
                      'startX' : 216,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C37',
                      'startX' : 220,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C36',
                      'startX' : 233,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C35',
                      'startX' : 237,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C34',
                      'startX' : 250,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C33',
                      'startX' : 254,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  
                  {
                      'name' : '2C32',
                      'startX' : 267,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C31',
                      'startX' : 271,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C30',
                      'startX' : 284,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C29',
                      'startX' : 288,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C28',
                      'startX' : 301,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C27',
                      'startX' : 305,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C26',
                      'startX' : 318,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C25',
                      'startX' : 322,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C24',
                      'startX' : 335,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C23',
                      'startX' : 339,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C22',
                      'startX' : 352,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C21',
                      'startX' : 356,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C20',
                      'startX' : 369,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C19',
                      'startX' : 373,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C18',
                      'startX' : 386,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C17',
                      'startX' : 390,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C16',
                      'startX' : 403,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C15',
                      'startX' : 407,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C14',
                      'startX' : 420,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C13',
                      'startX' : 424,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C12',
                      'startX' : 437,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C11',
                      'startX' : 441,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C10',
                      'startX' : 454,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C09',
                      'startX' : 458,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C08',
                      'startX' : 471,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C07',
                      'startX' : 475,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C06',
                      'startX' : 488,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C05',
                      'startX' : 492,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C04',
                      'startX' : 505,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C03',
                      'startX' : 509,
                      'startY' : 20,
                      'binCount' : 32,
                      'levelCount' : 5,
                      'firstBin' : 32
                  },
                  {
                      'name' : '2C02',
                      'startX' : 522,
                      'startY' : 28.2,
                      'binCount' : 30,
                      'levelCount' : 5,
                      'firstBin' : 30
                  },
                  {
                      'name' : '2C01',
                      'startX' : 526,
                      'startY' : 28.2,
                      'binCount' : 30,
                      'levelCount' : 5,
                      'firstBin' : 30
                  },
                  {
                      'name' : '2A08',
                      'startX' : 750,
                      'startY' : 2,
                      'binCount' : 20,
                      'levelCount' : 5,
                      'firstBin' : 38
                  },
                  {
                      'name' : '2A07',
                      'startX' : 737,
                      'startY' : 18.4,
                      'binCount' : 16,
                      'levelCount' : 5,
                      'firstBin' : 34
                  },
                  {
                      'name' : '2A06',
                      'startX' : 733,
                      'startY' : 18.4,
                      'binCount' : 16,
                      'levelCount' : 5,
                      'firstBin' : 34
                  },
                  {
                      'name' : '2A05',
                      'startX' : 720,
                      'startY' : 18.4,
                      'binCount' : 26,
                      'levelCount' : 5,
                      'firstBin' : 34
                  },
                  {
                      'name' : '2A04',
                      'startX' : 716,
                      'startY' : 18.4,
                      'binCount' : 26,
                      'levelCount' : 5,
                      'firstBin' : 34
                  },
                  {
                      'name' : '2A03',
                      'startX' : 704,
                      'startY' : 18.4,
                      'binCount' : 26,
                      'levelCount' : 5,
                      'firstBin' : 34
                  },
                  {
                      'name' : '2A02',
                      'startX' : 700,
                      'startY' : 18.4,
                      'binCount' : 26,
                      'levelCount' : 5,
                      'firstBin' : 34
                  },
                  {
                      'name' : '2A01',
                      'startX' : 687,
                      'startY' : 2,
                      'binCount' : 38,
                      'levelCount' : 5,
                      'firstBin' : 38
                  },
                  {
                      'name' : '2B02',
                      'startX' : 681,
                      'startY' : 38,
                      'binCount' : 28,
                      'levelCount' : 5,
                      'firstBin' : 28
                  },
              ]
          },
          'otherAreas' : [
              {
                  'name' : '2REC001',
                  'startX' : 16,
                  'startY' : 57,
                  'width' : 6,
                  'height' : 95
              },
              {
                  'name' : '2REC002',
                  'startX' : 22,
                  'startY' : 51,
                  'width' : 6,
                  'height' : 101
              },
              {
                  'name' : '2REC003',
                  'startX' : 28,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC004',
                  'startX' : 34,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC005',
                  'startX' : 40,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC006',
                  'startX' : 46,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC007',
                  'startX' : 52,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC008',
                  'startX' : 58,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC009',
                  'startX' : 64,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC010',
                  'startX' : 70,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC011',
                  'startX' : 76,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC012',
                  'startX' : 82,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC013',
                  'startX' : 88,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC014',
                  'startX' : 94,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC015',
                  'startX' : 100,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC016',
                  'startX' : 106,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC017',
                  'startX' : 112,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
              {
                  'name' : '2REC018',
                  'startX' : 118,
                  'startY' : 45,
                  'width' : 6,
                  'height' : 107
              },
            //   {
            //       'name' : '2CNSHP01',
            //       'startX' : 546,
            //       'startY' : 61,
            //       'width' : 7.5,
            //       'height' : 107
            //   },
            //   {
            //       'name' : '2CNSHP02',
            //       'startX' : 553.5,
            //       'startY' : 61,
            //       'width' : 7.5,
            //       'height' : 107
            //   },
//////////
              {
                  'name' : '2CNSHP03',
                  'startX' : 552,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP04',
                  'startX' : 556.1,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP05',
                  'startX' : 560.2,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP06',
                  'startX' : 564.3,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP07',
                  'startX' : 568.4,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP08',
                  'startX' : 572.5,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP09',
                  'startX' : 576.6,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP10',
                  'startX' : 580.7,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP11',
                  'startX' : 584.8,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
              {
                  'name' : '2CNSHP12',
                  'startX' : 588.9,
                  'startY' : 61,
                  'width' : 4.1,
                  'height' : 91
              },
//////////
              {
                  'name' : '2AMZKIT8',
                  'startX' : 543.8,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
              {
                  'name' : '2AMZKIT7',
                  'startX' : 547.9,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
              {
                  'name' : '2AMZKIT6',
                  'startX' : 552,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
              {
                  'name' : '2AMZKIT5',
                  'startX' : 556.1,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
              {
                  'name' : '2AMZKIT4',
                  'startX' : 560.2,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
              {
                  'name' : '2AMZKIT3',
                  'startX' : 564.3,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
              {
                  'name' : '2AMZKIT2',
                  'startX' : 568.4,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
              {
                  'name' : '2AMZKIT1',
                  'startX' : 572.5,
                  'startY' : 45,
                  'width' : 4.1,
                  'height' : 16
              },
//////////
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 65,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 69,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 73,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 77,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 81,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 85,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 89,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 93,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 97,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 101,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 105,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 109,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 113,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 117,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 121,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 125,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 129,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 133,
                  'width' : 12,
                  'height' : 4
              },
              {
                  'name' : '2CAMSHP1',
                  'startX' : 540,
                  'startY' : 137,
                  'width' : 12,
                  'height' : 4
              },
//////////
              {
                'name' : '2CAMSHP1',
                'startX' : 540,
                'startY' : 141,
                'width' : 4,
                'height' : 11
            },
            {
                'name' : '2CAMSHP1',
                'startX' : 544,
                'startY' : 141,
                'width' : 4,
                'height' : 11
            },
            {
                'name' : '2CAMSHP1',
                'startX' : 548,
                'startY' : 141,
                'width' : 4,
                'height' : 11
            },
//////////
              {
                  'name' : '2CSSHP21',
                  'startX' : 593,
                  'startY' : 61,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP20',
                  'startX' : 593,
                  'startY' : 65.33,
                  'width' : 14,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP19',
                  'startX' : 593,
                  'startY' : 69.67,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP18',
                  'startX' : 593,
                  'startY' : 74,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP17',
                  'startX' : 593,
                  'startY' : 78.33,
                  'width' : 14,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP16',
                  'startX' : 593,
                  'startY' : 82.67,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP15',
                  'startX' : 593,
                  'startY' : 87,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP14',
                  'startX' : 593,
                  'startY' : 91.33,
                  'width' : 14,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP13',
                  'startX' : 593,
                  'startY' : 95.67,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP12',
                  'startX' : 593,
                  'startY' : 100,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP11',
                  'startX' : 593,
                  'startY' : 104.33,
                  'width' : 14,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP10',
                  'startX' : 593,
                  'startY' : 108.67,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP09',
                  'startX' : 593,
                  'startY' : 113,
                  'width' : 14,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP08',
                  'startX' : 593,
                  'startY' : 117.33,
                  'width' : 14,
                  'height' : 4.34
              },
            //   {
            //       'name' : '2CSSHP07',
            //       'startX' : 593,
            //       'startY' : 121.67,
            //       'width' : 5,
            //       'height' : 4.33
            //   },
              {
                  'name' : '2CSSHP06',
                  'startX' : 593,
                  'startY' : 126,
                  'width' : 5,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP05',
                  'startX' : 593,
                  'startY' : 130.33,
                  'width' : 5,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP04',
                  'startX' : 593,
                  'startY' : 134.67,
                  'width' : 5,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP03',
                  'startX' : 593,
                  'startY' : 139,
                  'width' : 5,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP02',
                  'startX' : 593,
                  'startY' : 143.33,
                  'width' : 5,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP01',
                  'startX' : 593,
                  'startY' : 147.67,
                  'width' : 5,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP35',
                  'startX' : 617,
                  'startY' : 61,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP34',
                  'startX' : 617,
                  'startY' : 65.33,
                  'width' : 16.7,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP33',
                  'startX' : 617,
                  'startY' : 69.67,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP32',
                  'startX' : 617,
                  'startY' : 74,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP31',
                  'startX' : 617,
                  'startY' : 78.33,
                  'width' : 16.7,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP30',
                  'startX' : 617,
                  'startY' : 82.67,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP29',
                  'startX' : 617,
                  'startY' : 87,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP28',
                  'startX' : 617,
                  'startY' : 91.33,
                  'width' : 16.7,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP27',
                  'startX' : 617,
                  'startY' : 95.67,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP26',
                  'startX' : 617,
                  'startY' : 100,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP25',
                  'startX' : 617,
                  'startY' : 104.33,
                  'width' : 16.7,
                  'height' : 4.34
              },
              {
                  'name' : '2CSSHP24',
                  'startX' : 617,
                  'startY' : 108.67,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP23',
                  'startX' : 617,
                  'startY' : 113,
                  'width' : 16.7,
                  'height' : 4.33
              },
              {
                  'name' : '2CSSHP22',
                  'startX' : 617,
                  'startY' : 117.33,
                  'width' : 16.7,
                  'height' : 4.34
              },
//////////
            {
                'name' : '2B01[A-C][011-019]',
                'startX' : 646,
                'startY' : 62,
                'width' : 8,
                'height' : 8.2
            },
            {
                'name' : '2B01[A-C][011-019]',
                'startX' : 646,
                'startY' : 70.2,
                'width' : 8,
                'height' : 8.2
            },
            {
                'name' : '2B01[A-C][011-019]',
                'startX' : 646,
                'startY' : 78.4,
                'width' : 8,
                'height' : 8.2
            },
            {
                'name' : '2B01[A-C][011-019]',
                'startX' : 646,
                'startY' : 86.6,
                'width' : 8,
                'height' : 8.2
            },
            {
                'name' : '2B01[A-C][011-019]',
                'startX' : 646,
                'startY' : 94.8,
                'width' : 8,
                'height' : 8.2
            },
            {
                'name' : '2B01[A-C][011-019]',
                'startX' : 646,
                'startY' : 103,
                'width' : 8,
                'height' : 8.2
            },
            {
                'name' : '2B01[A-C][011-019]',
                'startX' : 646,
                'startY' : 111.2,
                'width' : 8,
                'height' : 8.2
            },
            // {
            //     'name' : '2B01[A-C][011-019]',
            //     'startX' : 646,
            //     'startY' : 119.4,
            //     'width' : 8,
            //     'height' : 8.2
            // },
//////////
            {
                'name' : '2B01A078',
                'startX' : 654,
                'startY' : 109,
                'width' : 4,
                'height' : 4
            },
            {
                'name' : '2B01A077',
                'startX' : 654,
                'startY' : 113,
                'width' : 4,
                'height' : 4
            },
            {
                'name' : '2B01A076',
                'startX' : 654,
                'startY' : 117,
                'width' : 4,
                'height' : 4
            },
            {
                'name' : '2B01A074',
                'startX' : 654,
                'startY' : 121,
                'width' : 4,
                'height' : 4
            },
            {
                'name' : '2B01A073',
                'startX' : 654,
                'startY' : 125,
                'width' : 4,
                'height' : 4
            },
            {
                'name' : '2B01A072',
                'startX' : 654,
                'startY' : 129,
                'width' : 4,
                'height' : 4
            },
//////////
              {
                  'name' : 'WORKSTG1',
                  'startX' : 504,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG2',
                  'startX' : 507.75,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG3',
                  'startX' : 511.5,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG4',
                  'startX' : 515.25,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG5',
                  'startX' : 519,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG6',
                  'startX' : 522.75,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG7',
                  'startX' : 526.5,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG8',
                  'startX' : 530.25,
                  'startY' : 2,
                  'width' : 3.75,
                  'height' : 10
              },
              {
                  'name' : 'WORKSTG',
                  'startX' : 467,
                  'startY' : 2,
                  'width' : 4.5,
                  'height' : 4.5
              },
              {
                  'name' : 'WORKSTG',
                  'startX' : 471.5,
                  'startY' : 2,
                  'width' : 4.5,
                  'height' : 4.5
              },
              {
                  'name' : 'WORKSTG',
                  'startX' : 476,
                  'startY' : 2,
                  'width' : 4.5,
                  'height' : 4.5
              },
          ],
          'zones' : [

          ],
      }
  },
  {
      'name' : 'SUS1',
      'width' : 708,
      'height' : 180,
      'parts' : {
          'outerWalls' : [
              0, 0,
              708, 0,
              708, 180,
              0, 180,
              0, 0
          ],
          'innerWalls' : [
              [165, 0,
               165, 19,
               338, 19,
               338, 0],
              [137, 180,
               137, 145,
               219, 145,
               219, 97,
               211, 97,
               211, 30,
               309, 30,
               309, 152,
               395, 152,
               395, 140,
               435, 140,
               435, 120,
               708, 120],
             [309, 152,
              219, 152,
              219, 97,
              262, 97,
              262, 85,
              309, 85,
              262, 85,
              262, 62,
              309, 62,
              262, 62,
              262, 30,
              262, 71,
              232, 71,
              232, 30,
              232, 62,
              211, 62,
              232, 62,
              232, 71,
              211, 71,
              232, 71,
              232, 97],
          ],
          'racking' : {
              'width' : 4.1,
              'depth' : 4,
              'direction' : 'vertical',
              'aisles' : [
                  {
                      'name' : 'D16',
                      'startX' : 16,
                      'startY' : 40.2,
                      'binCount' : 30,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D15',
                      'startX' : 20,
                      'startY' : 40.2,
                      'binCount' : 30,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D14',
                      'startX' : 35,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D13',
                      'startX' : 39,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D12',
                      'startX' : 54,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D11',
                      'startX' : 58,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D10',
                      'startX' : 73,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D09',
                      'startX' : 77,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D08',
                      'startX' : 92,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D07',
                      'startX' : 96,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D06',
                      'startX' : 111,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D05',
                      'startX' : 115,
                      'startY' : 32,
                      'binCount' : 32,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D04',
                      'startX' : 130,
                      'startY' : 32,
                      'binCount' : 22,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D03',
                      'startX' : 134,
                      'startY' : 32,
                      'binCount' : 22,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D02',
                      'startX' : 149,
                      'startY' : 32,
                      'binCount' : 22,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'D01',
                      'startX' : 153,
                      'startY' : 32,
                      'binCount' : 22,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'C22',
                      'startX' : 412,
                      'startY' : 32,
                      'binCount' : 18,
                      'levelCount' : 4,
                      'firstBin' : 1
                  },
                  {
                      'name' : 'C21',
                      'startX' : 416,
                      'startY' : 32,
                      'binCount' : 18,
                      'levelCount' : 4,
                      'firstBin' : 1
                  }
              ]
          },
          'otherAreas' : [
              {
                  'name' : 'PROSTG7',
                  'startX' : 168,
                  'startY' : 40,
                  'width' : 30,
                  'height' : 11
              },
              {
                  'name' : 'PROSTG6',
                  'startX' : 168,
                  'startY' : 51,
                  'width' : 30,
                  'height' : 11
              },
              {
                  'name' : 'PROSTG5',
                  'startX' : 168,
                  'startY' : 62,
                  'width' : 30,
                  'height' : 11
              },
              {
                  'name' : 'PROSTG4',
                  'startX' : 168,
                  'startY' : 73,
                  'width' : 30,
                  'height' : 11
              },
              {
                  'name' : 'PROSTG3',
                  'startX' : 168,
                  'startY' : 84,
                  'width' : 30,
                  'height' : 11
              },
              {
                  'name' : 'PROSTG2',
                  'startX' : 168,
                  'startY' : 95,
                  'width' : 30,
                  'height' : 11
              },
              {
                  'name' : 'PROSTG1',
                  'startX' : 168,
                  'startY' : 106,
                  'width' : 30,
                  'height' : 11
              },
              {
                  'name' : 'LFGPROD1',
                  'startX' : 362,
                  'startY' : 32,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD2',
                  'startX' : 362,
                  'startY' : 42,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD3',
                  'startX' : 362,
                  'startY' : 52,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD4',
                  'startX' : 362,
                  'startY' : 62,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD5',
                  'startX' : 362,
                  'startY' : 72,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD6',
                  'startX' : 362,
                  'startY' : 82,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD7',
                  'startX' : 362,
                  'startY' : 92,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD8',
                  'startX' : 362,
                  'startY' : 102,
                  'width' : 40,
                  'height' : 10
              },
              {
                  'name' : 'LFGPROD9',
                  'startX' : 362,
                  'startY' : 112,
                  'width' : 40,
                  'height' : 10
              },
          ],
          'zones' : [

          ]
      }
  },
];