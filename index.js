let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newbtn");
let msg = document.querySelector(".msg");
let msgpara = document.querySelector("#msg")

let turnO = true;  //playerx,playery

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("hii")
        // if(turnO){
        //     box.innerText = "O";
        //     turnO = false;
        // }else{
        //     box.innerText = "X";
        //     turnO = true;
        // }
        // box.disabled = true;
        if (!box.classList.contains('disabled')) {
            if (turnO) {
              box.innerText = "O";
            } else {
              box.innerText = "X";
            }
            turnO = !turnO;
            box.classList.add('disabled');
        }
        checkwinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const resetbtn = () =>{
    turnO = true;
    enableboxes();
    msg.classList.add('hide');
}
const showWinner = (winner) =>{
    msgpara.innerText = `Congratulations winner is ${winner}`
    msg.classList.remove("hide");
    disableboxes();
}

const checkwinner = () =>{
    for(let pattern of winPatterns)
    {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != "")
        {
            if(val1 === val2  && val2 === val3)
            {
                console.log("Winner",val1);
                showWinner(val1);
            }
        }
    }
};

reset.addEventListener("click",resetbtn);
newgame.addEventListener("click",resetbtn);