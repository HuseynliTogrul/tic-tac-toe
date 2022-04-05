const playerText = document.getElementById("player");
const items = document.querySelectorAll(".item");
const errorText = document.getElementById("error");

let player = "X";
let gameOver = false;
let winner;

function startGame(){
    playerText.textContent = `${player}'s Turn!`
    items.forEach(item => item.addEventListener("click", () => chooseArea(item)))
}

function chooseArea(item){
    if(item.textContent === ""){
        item.textContent = player;
        if(player === "O"){
            item.style.color = "red"
        }
        turnPlayer();
    }else{
        errorText.textContent = "False step!";
        item.style.border = "2px solid red"
    setTimeout(() => {
        errorText.textContent = ""
        item.style.border = "1px solid black"
        }, 2000)
    }  

    checkWin();
    checkTie();

    if(gameOver){
        playerText.textContent= `Game is over, ${winner} Won`;
        items.forEach(item => item.style.pointerEvents = 'none');
    }
}


function turnPlayer(){
    if(player === "X"){
        player = "O"
        playerText.textContent = `${player}'s Turn!`
        return;
    }else if(player === "O"){
        player = "X"
        playerText.textContent = `${player}'s Turn!`
    }
}

function checkWin(){
    checkRows();
    checkColumns();
    checkDiagonals();
}

function checkTie() {
    const values = [];
    items.forEach(item => values.push(item.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Tie !";
        items.forEach(item => item.style.pointerEvents = 'none');
    }
}

function checkRows(){
   let row1 = items[0].textContent == items[1].textContent && items[0].textContent == items[2].textContent && items[0].textContent !== ""
   let row2 = items[3].textContent == items[4].textContent && items[3].textContent == items[5].textContent && items[3].textContent !== ""
   let row3 = items[6].textContent == items[7].textContent && items[6].textContent == items[8].textContent && items[6].textContent !== ""

   if(row1 || row2 || row3){
        gameOver = true;
   }
   if(row1) return winner = items[0].textContent
   if(row2) return winner = items[3].textContent
   if(row3) return winner = items[6].textContent
}

function checkColumns(){
    let col1 = items[0].textContent == items[3].textContent && items[0].textContent == items[6].textContent && items[0].textContent !== ""
    let col2 = items[1].textContent == items[4].textContent && items[1].textContent == items[7].textContent && items[1].textContent !== ""
    let col3 = items[2].textContent == items[5].textContent && items[2].textContent == items[8].textContent && items[2].textContent !== ""
 
    if(col1 || col2 || col3){
         gameOver = true;
    }
    if(col1) return winner = items[0].textContent
    if(col2) return winner = items[1].textContent
    if(col3) return winner = items[2].textContent
 }

function checkDiagonals(){
    let dig1 = items[0].textContent == items[4].textContent && items[0].textContent == items[8].textContent && items[0].textContent !== ""
    let dig2 = items[2].textContent == items[4].textContent && items[2].textContent == items[6].textContent && items[2].textContent !== ""
 
    if(dig1 || dig2){
         gameOver = true;
    }
    if(dig1) return winner = items[0].textContent
    if(dig2) return winner = items[2].textContent
 }



startGame();
