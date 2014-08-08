/*
  This AI simply generates a random 'plan'.

  Update the 'notify_player()' function to implement your own AI.
*/

defender.start(
  function notify_player(rocks, paddle_y){
    // random plan
    var moves = [];
    var y = 0;
    for (i=0;i<rocks.length;i++)
        if (rocks[i].distance < 30){
            y = parseInt( Math.tan( rocks[i].radians ) * rocks[i].distance);
            if (Math.abs(y) > 0)
                for( j = 0; j < Math.abs(y); j++ )
                    moves.push(-Math.abs(y)/y);
        }
        
    return moves;
  }
);
