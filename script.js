let turn = "X";
let gameover = false;
const whoseTurn = () =>{
    return turn === "X"? "0":"X";
}

const checkWin = () =>{
    let text = document.getElementsByClassName("text");
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
wins.forEach(e=>{
    if((text[e[0]].innerText===text[e[1]].innerText)&& (text[e[2]].innerText === text[e[1]].innerText)&& (text[e[0]].innerText !== "")){
        document.querySelector(".turns").innerText = text[e[0]].innerText + " Won!";
        gameover = true;
        // document.querySelector(".turns").innerText = "Game Over!";
    }
   
});


}


let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(element => {
    let text = element.querySelector(".text");
    element.addEventListener("click", ()=>{
        if(text.innerText === ''){
            text.innerText = turn;
            turn = whoseTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("turns")[0].innerText = "Turn For "+ turn;
            }
        }
    });
});

restart.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll('.text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    turn = 'X';
    gameover = false;
    document.getElementsByClassName("turns")[0].innerText = "Turn For "+ turn;

    
});