document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells: [
     {
       row: 0,
       col: 0,
       isMine: false,
       isMarked: false,
       hidden: true,   
     },
     {row: 0,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {row: 0,
      col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
    },
    {row: 0,
      col: 3,
    isMine: true,
    isMarked: false,
    hidden: true,
    },
    {row: 0,
      col: 4,
    isMine: false,
    isMarked: false,
    hidden: true,
    },
    {row: 1,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,

    },
    {row: 1,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      
    },
    {row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      },
      {row: 1,
        col: 3,
        isMine: false,
        isMarked: false,
        hidden: true,
        },
        {row: 1,
          col: 4,
          isMine: false,
          isMarked: false,
          hidden: true,
          },

    {row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      
    },
    {row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      
    },
    {row: 2,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
      {row: 2,
        col: 3,
        isMine: true,
        isMarked: false,
        hidden: true,
      },
        {row: 2,
          col: 4,
          isMine: true,
          isMarked: false,
          hidden: true,
        },
        {row: 3,
          col: 0,
          isMine: true,
          isMarked: false,
          hidden: true,
        },
        {row: 3,
          col: 1,
          isMine: false,
          isMarked: false,
          hidden: true,
        },
        {row: 3,
          col: 2,
          isMine: true,
          isMarked: false,
          hidden: true,
        },
        {row: 3,
          col: 3,
          isMine: false,
          isMarked: false,
          hidden: true,
        },
        {row: 3,
          col: 4,
          isMine: true,
          isMarked: false,
          hidden: true,
        },
        {row: 4,
          col: 0,
          isMine: true,
          isMarked: false,
          hidden: true,
        },
        {row: 4,
          col: 1,
          isMine: false,
          isMarked: false,
          hidden: true,
        },
        {row: 4,
          col: 2,
          isMine: false,
          isMarked: false,
          hidden: true,
        },
        {row: 4,
          col: 3,
          isMine: true,
          isMarked: false,
          hidden: true,
        },
        {row: 4,
          col: 4,
          isMine: false,
          isMarked: false,
          hidden: true,
        },
      ]
  }
 

function startGame () {
   for (var i = 0; i < board.cells.length; i++){
    countSurroundingMines(board.cells[i])
   }
   // Don't remove this function call: it makes the game work!
  lib.initBoard()

    document.addEventListener('click', checkForWin);
     document.addEventListener('contextmenu', checkForWin);
     }
      document.getElementById('board').addEventListener('click', playSound);

      // Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
  if (board.cells[i].isMine == true && board.cells[i].isMarked == true){
    lib.displayMessage('The Force is strong with you!')
  }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}
// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
  function countSurroundingMines(cell) {
    var count = 0
    var surroundingCell = lib.getSurroundingCells(cell.row, cell.col);
    for (var i = 0; i < surroundingCell.length; i++) {
      if (surroundingCell[i].isMine == true) {
         count++;
      }cell.surroundingMines = count;
    }
    
     }
     function playSound () {
      for (var i = 0; i < board.cells.length; i++) {
        if (board.cells[i].hidden == false && board.cells[i].isMine ==true){
          var sound = document.getElementById("Boom");
      
          sound.play();
      
          } else if (board.cells[i].hidden == false && board.cells[i].isMine == false){
            var sound = document.getElementById("notaMine");

            sound.play();  
          }
        }
      }
  
