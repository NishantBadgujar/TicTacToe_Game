let boxes = document.querySelectorAll(".box");
let reseteBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#newbtn");
let msgCont = document.querySelector(".msg-container");
let win = document.querySelector("#win");
let draw = document.querySelector("#draw");
let turnO = true;

let a = "O";
let b = "X";


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    enablebtn();
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO === true){
            box.innerText= a;
            
            turnO = false;
            if(box.innerText=a){
                box.style.color="blue";
            }
            
        }
        
        
        else{
            box.innerText= b;
            turnO = true;
            if(box.innerText=b){
                box.style.color="red";
        }
        
    }    
        
        box.disabled = true;

        checkWinner();
    });
});

const dissablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgCont.classList.add("hide");
    }
};

const showWinner = (winner) => {
win.innerText = `Congratulation, winner is "${winner}".`;
msgCont.classList.remove("hide");
dissablebtn();
}

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWinner(pos1Val);
                document.body.style.backgroundColor='black';
                

            }
            else if(pos1Val != pos2Val && pos2Val != pos3Val && pos1Val != "" && pos2Val != "" && pos3Val != ""){
                win.innerText = `Match is Draw...!`;
                msgCont.classList.remove("hide");
                
                dissablebtn();
            }

        }
        
    }

};

newGame.addEventListener("click", resetGame);
reseteBtn.addEventListener("click", resetGame);

