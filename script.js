let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newGame=document.querySelector("#new-game");
let turn0=true;
let x=0;
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("mousedown",()=>{
        box.style.backgroundColor="#111111";
    })
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.style.backgroundColor="#323131";
        box.disabled=true;
        checkWinner();
        x++;
        if(x===9){
            msg.innerText="It's a tie.";
            msgContainer.classList.remove("hide");
            disableBoxes();
            
        }
    })
});
const displayWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    x=0;
}
const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                
                displayWinner(pos1);
                let winpos=[boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]];
                for(let pos of winpos){
                    
                    pos.style.color="lime";
                }

            }
        }
    }
}
resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    x=0;
    for(let box of boxes){
        box.style.color="#FFD700";
        box.style.backgroundColor="#1C1C1C";
    }

}
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
