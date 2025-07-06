let boxes =document.querySelectorAll('.box');
let reset = document.querySelector('#res');
let msgContainer = document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let newGame = document.querySelector('#new');


let turn=true; // true for X, false for O
let count=0;//if game ends in draw, then count will be 9
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText='X';
            box.style.color='white';
            turn=false;
        }
        else{
            box.innerText='O';
            box.style.color='black';
            turn=true;
        }
        count++;
        checkwinner();
        console.log(count);
        if(count===9){
            msgContainer.classList.remove('hide');
            msg.innerText='Game is Draw';
            disableboxes();
            return 0;
        }
        box.disabled=true;
        
    });
});

const showwinner = (winner) => {
    msgContainer.classList.remove('hide');
    if(winner==='X'){
        msg.innerText='Congratulations:  X is the winner';
        disableboxes();
    }
    else{
        msg.innerText='Congratulations: O is the winner';
        disableboxes();
    }

    //instead of if-else,we can write like this:
    //msg.innerText=`Congratulations: ${winner} is the winner`;

};

const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const checkwinner = () => {
    for(let pattern of arr){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
};

const resetgame = () => {
    turn=true;
    enableboxes();
    msgContainer.classList.add("hide");

};

newGame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);