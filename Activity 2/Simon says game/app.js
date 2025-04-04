let gameSeq = [];
let userSeq = [];
let gameStart = false;
let level = 0;
let p = document.querySelector("p");
let btnClassList = ["red", "yellow", "green", "purple"];



// step 1 start the game

document.addEventListener("click", function () {
    if (gameStart == false) {
        console.log("Game Started");
        gameStart = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () { btn.classList.remove("gameFlash") }, 200);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () { btn.classList.remove("userFlash") }, 200);
}

function levelUp() {

    level++;
    p.innerText = `Level : ${level}`;
    // flsh the key
    let index = Math.floor(Math.random() * 3);
    gameSeq.push(`${btnClassList[index]}`);
    console.log(btnClassList[index]);
    console.log("Game:", gameSeq);
    let btn = document.querySelector(`.${btnClassList[index]}`);

    gameFlash(btn);



}

// acces all buttons and add eventListner on all button when button will be clicked then button flased
function checkAns() {
    if (gameSeq.length == userSeq.length) {
        if (gameSeq[gameSeq.length - 1] == userSeq[userSeq.length - 1]) {
            levelUp();
            userSeq = [];

            

        }
       
    }
    else {
        if (gameSeq[userSeq.length - 1] == userSeq[userSeq.length - 1]) {
            
        }
        else {
            gameEnd();
        }

    }
}

function buttonPress() {
    let btn = this;
    console.log(btn);
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(`user :${userColor}`);

    if (gameStart != false) {
        userSeq.push(userColor);
        console.log(userSeq);
        checkAns();
    }

}
let allButtons = document.querySelectorAll(".button");
for (btn of allButtons) {

    btn.addEventListener("click", buttonPress);

}

function gameEnd() {
    gameSeq = [];
    userSeq = [];
    gameStart = false;
    alert(`You scored ${level}`);
    level = 0;
    p.innerText = "Press any key to start the game";
}