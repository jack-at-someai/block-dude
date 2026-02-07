// Block Dude levels
// x = wall/brick, 0 = movable block, < or > = player (facing dir), ! = door/goal
// Level data from the original TI-83/84 Block Dude by Brandon Sterner
// Source: github.com/cbarrick/blockdude

window.LEVELS = [
  // Level 1
  [
    'x                  x',
    'x                  x',
    'x                  x',
    'x                  x',
    'x   x       x      x',
    'x!  x   x 0 x 0 >  x',
    'xxxxxxxxxxxxxxxxxxxx',
    '                    '
  ],
  // Level 2
  [
    ' x    xx        xx    ',
    ' x                x   ',
    'xx                 x  ',
    'x!                  x ',
    'xx                   x',
    ' x           x  0    x',
    ' x           x0 00<  x',
    ' xxxxx   xxxxxxxxxxxxx',
    '     x  0x            ',
    '     xxxxx            ',
  ],
  // Level 3
  [
    ' x                 ',
    ' x   xxxxxxxxxxxxx ',
    'x x x             x',
    'x  x              x',
    'x                0x',
    'x               00x',
    'x xxx    <   x0 xx ',
    'x x x    x  xxxxx  ',
    'x x x00 xx  x      ',
    'x!x xxxxxx xx      ',
    'xxx xx   xxx       '
  ],
  // Level 4
  [
    '                  x     ',
    '                 x x    ',
    '       x        x   x   ',
    '      x x      x     x  ',
    '   xxx   x    x       x ',
    '  x       x  x         x',
    ' x         xx          x',
    ' x                    0x',
    ' x                   00x',
    ' x               !   xxx',
    'xx    x          x   x  ',
    'x<    x 0        xxxxx  ',
    'xxxxx x 0   0  xxx      ',
    '    x x 0 x x0 x        ',
    '    x xxxxxxxxxx        ',
    '    xxx                 '
  ],
  // Level 5
  [
    '     xxx    xxxxxxxxx ',
    ' xxxx   xxxx         x',
    'x                    x',
    'x                    x',
    'x                    x',
    'x     x              x',
    'x     x              x',
    'x     x0000          x',
    'x<   xxxxxxx!        x',
    'xx xxx     xx x     0x',
    ' x x        x xx   00x',
    ' x x        x xx  000x',
    ' xxx        x xxxxxxxx',
    '            xxx       '
  ],
  // Level 6
  [
    ' xxx             xxxx',
    ' x  xxxxxxxxxxxxx   x',
    'xx                  x',
    'x<                  x',
    'xx                  x',
    ' x                00x',
    ' x00        x  0  xxx',
    ' x000       x!000 x  ',
    ' x0000      xxxxx x  ',
    ' xxxxx    xxx   xxx  ',
    '     x   0x          ',
    '     xx xxx          ',
    '      xxx            '
  ],
  // Level 7
  [
    '  x   xxxxx   xx   xxx  ',
    ' x x x     x x  x x   x ',
    ' x  xx      xx   xx    x',
    ' x   x       x    x    x',
    ' x                    0x',
    ' x                    0x',
    'xx                   00x',
    'x<   0               xxx',
    'xx   x 0     x    xx x  ',
    ' x   x 0    xx 0 !xxxx  ',
    ' xx  x 000  xx 000x     ',
    '  x  xxxxxx xxxxxxx     ',
    '  xx x    xxx           ',
    '   xxx                  '
  ],
];
