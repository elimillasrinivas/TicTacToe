const cellTag=document.querySelectorAll("#cell")
const cells=Array.from(cellTag)
const statusTag=document.getElementById("status")
// const restartBtn = document.getElementById("restart");

let spaces=['','','','','','','','','']
// let currPlayer="X"
let currPlayer="<img src='x.gif'>"
let flag=false;

let winningCells=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
intialise();
function gameStatus(cell){
    for(let i=0;i<9;i++){
            if(i==cell.getAttribute("ind")) {
            //   spaces[i]=(cell.innerText)
              spaces[i]=(cell.innerHTML)
            }
            
        }
        checkWinner(spaces)
}

function checkWinner(spaces){
            flag=false
        for(let i=0;i<winningCells.length;i++){
            let condition=winningCells[i]
            let cellA=spaces[condition[0]]
            let cellB=spaces[condition[1]]
            let cellC = spaces[condition[2]];
            if(cellA == "" || cellB == "" || cellC == ""){
                    continue;
                }
            if(cellA == cellB && cellB == cellC){
                statusTag.innerHTML = `${cellA} <span>won!</span>`;
                flag=true
                break;
                }
             if(!spaces.includes("") && cellA!=cellB && cellB!==cellC) statusTag.innerHTML=`<span>Tied up!</span>`;

        }
}

function intialise(){

    cells.forEach(function(cell){
        cell.addEventListener("click",()=>{
            if(flag==true) cell.removeEventListener('click',()=>{

            })
            else{
                if(cell.innerHTML!="") return
                // cell.innerText=currPlayer
                cell.innerHTML=currPlayer
                if (currPlayer == "<img src='x.gif'>") {
                  currPlayer = "<img src='o.gif'>";
                  statusTag.innerHTML = `${currPlayer} <span>'s turn</span>`;
                } else if (currPlayer == "<img src='o.gif'>") {
                  currPlayer = "<img src='x.gif'>";
                  statusTag.innerHTML = `${currPlayer}<span>'s turn</span>`;
                }
                gameStatus(cell)
            }
        })
        
    })
}
