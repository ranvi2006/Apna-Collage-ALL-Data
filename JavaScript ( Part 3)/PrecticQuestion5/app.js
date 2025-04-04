let game=[['X',null,'O'],
         [null,'X',null],
          ['O',null,'X']];

          game[0][1]='O';

          
          for(let i=0;game.length;i++)
            {
            
                for(let j=0;j<game[i].length;j++)
                {
                    console.log(game[i][j]);
                }
            }
            