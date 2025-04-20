const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box7 = document.querySelector(".box-7");
const box8 = document.querySelector(".box-8");
const box9 = document.querySelector(".box-9");

const player1Text = document.querySelector(".player-1");
const player2Text = document.querySelector(".player-2");

const newGamebtn = document.querySelector("button");

let isbox1Full = false;
let isbox2Full = false;
let isbox3Full = false;
let isbox4Full = false;
let isbox5Full = false;
let isbox6Full = false;
let isbox7Full = false;
let isbox8Full = false;
let isbox9Full = false;

let isPlayer1 = true;

let gameOn = true;

function checkWin() {
  //CHecking line 1
  if (
    box1.textContent !== "" &&
    box1.textContent === box2.textContent &&
    box1.textContent === box3.textContent
  ) {
    if (box1.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");

      gameOn = false;
    }
    if (box1.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box1.classList.add("winning-box");
    box2.classList.add("winning-box");
    box3.classList.add("winning-box");
  }
  //Checking line 2
  if (
    box4.textContent !== "" &&
    box4.textContent === box5.textContent &&
    box4.textContent === box6.textContent
  ) {
    if (box4.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");
      gameOn = false;
    }
    if (box4.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box4.classList.add("winning-box");
    box5.classList.add("winning-box");
    box6.classList.add("winning-box");
  }
  //Checking line 3
  if (
    box7.textContent !== "" &&
    box7.textContent === box8.textContent &&
    box7.textContent === box9.textContent
  ) {
    if (box7.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");
      gameOn = false;
    }
    if (box7.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box7.classList.add("winning-box");
    box8.classList.add("winning-box");
    box9.classList.add("winning-box");
  }
  //Checking column 1
  if (
    box1.textContent !== "" &&
    box1.textContent === box4.textContent &&
    box1.textContent === box7.textContent
  ) {
    if (box1.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");
      gameOn = false;
    }
    if (box1.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box1.classList.add("winning-box");
    box4.classList.add("winning-box");
    box7.classList.add("winning-box");
  }
  //Checking column 2
  if (
    box2.textContent !== "" &&
    box2.textContent === box5.textContent &&
    box2.textContent === box8.textContent
  ) {
    if (box2.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");
      gameOn = false;
    }
    if (box2.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box2.classList.add("winning-box");
    box5.classList.add("winning-box");
    box8.classList.add("winning-box");
  }
  //Checking column 3
  if (
    box3.textContent !== "" &&
    box3.textContent === box6.textContent &&
    box3.textContent === box9.textContent
  ) {
    if (box3.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");
      gameOn = false;
    }
    if (box3.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box3.classList.add("winning-box");
    box6.classList.add("winning-box");
    box9.classList.add("winning-box");
  }

  //Checking vertical 1
  if (
    box1.textContent !== "" &&
    box1.textContent === box5.textContent &&
    box1.textContent === box9.textContent
  ) {
    if (box1.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");
      gameOn = false;
    }
    if (box1.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box1.classList.add("winning-box");
    box5.classList.add("winning-box");
    box9.classList.add("winning-box");
  }
  //Checking vertical 2
  if (
    box3.textContent !== "" &&
    box3.textContent === box5.textContent &&
    box3.textContent === box7.textContent
  ) {
    if (box3.textContent === "X") {
      console.log("player1 win");
      player1Text.textContent = "player1 WINS!";
      player1Text.classList.add("winner-text");
      gameOn = false;
    }
    if (box3.textContent === "O") {
      console.log("player 2 win");
      player2Text.textContent = "player2 WINS!";
      player2Text.classList.add("winner-text");
      gameOn = false;
    }
    box3.classList.add("winning-box");
    box5.classList.add("winning-box");
    box7.classList.add("winning-box");
  }
}

function switchRedDot() {
  player1Text.classList.toggle("active-player");
  player2Text.classList.toggle("active-player");
  player1Text.classList.toggle("inactive-player");
  player2Text.classList.toggle("inactive-player");
}

box1.addEventListener("click", function () {
  if (!gameOn) return;
  if (!isbox1Full) {
    if (isPlayer1) {
      box1.classList.add("X");
      box1.textContent = "X";
    } else {
      box1.classList.add("O");
      box1.textContent = "O";
    }
    isbox1Full = !isbox1Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box2.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox2Full) {
    if (isPlayer1) {
      box2.classList.add("X");
      box2.textContent = "X";
    } else {
      box2.classList.add("O");
      box2.textContent = "O";
    }
    isbox2Full = !isbox2Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box3.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox3Full) {
    if (isPlayer1) {
      box3.classList.add("X");
      box3.textContent = "X";
    } else {
      box3.classList.add("O");
      box3.textContent = "O";
    }
    isbox3Full = !isbox3Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box4.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox4Full) {
    if (isPlayer1) {
      box4.classList.add("X");
      box4.textContent = "X";
    } else {
      box4.classList.add("O");
      box4.textContent = "O";
    }
    isbox4Full = !isbox4Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box5.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox5Full) {
    if (isPlayer1) {
      box5.classList.add("X");
      box5.textContent = "X";
    } else {
      box5.classList.add("O");
      box5.textContent = "O";
    }
    isbox5Full = !isbox5Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box6.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox6Full) {
    if (isPlayer1) {
      box6.classList.add("X");
      box6.textContent = "X";
    } else {
      box6.classList.add("O");
      box6.textContent = "O";
    }
    isbox6Full = !isbox6Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box7.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox7Full) {
    if (isPlayer1) {
      box7.classList.add("X");
      box7.textContent = "X";
    } else {
      box7.classList.add("O");
      box7.textContent = "O";
    }
    isbox7Full = !isbox7Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box8.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox8Full) {
    if (isPlayer1) {
      box8.classList.add("X");
      box8.textContent = "X";
    } else {
      box8.classList.add("O");
      box8.textContent = "O";
    }
    isbox8Full = !isbox8Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

box9.addEventListener("click", function () {
  if (!gameOn) return;

  if (!isbox9Full) {
    if (isPlayer1) {
      box9.classList.add("X");
      box9.textContent = "X";
    } else {
      box9.classList.add("O");
      box9.textContent = "O";
    }
    isbox9Full = !isbox9Full;
    isPlayer1 = !isPlayer1;
    switchRedDot();
  }
  checkWin();
});

newGamebtn.addEventListener("click", function () {
  box1.textContent = "";
  box2.textContent = "";
  box3.textContent = "";
  box4.textContent = "";
  box5.textContent = "";
  box6.textContent = "";
  box7.textContent = "";
  box8.textContent = "";
  box9.textContent = "";

  isbox1Full = false;
  isbox2Full = false;
  isbox3Full = false;
  isbox4Full = false;
  isbox5Full = false;
  isbox6Full = false;
  isbox7Full = false;
  isbox8Full = false;
  isbox9Full = false;

  isPlayer1 = true;

  gameOn = true;

  ////Reset players's name
  player1Text.textContent = "Player 1";
  player2Text.textContent = "Player 2";

  ///Removing the green box style of the winner
  player1Text.classList.remove("winner-text");
  player2Text.classList.remove("winner-text");

  box1.classList.remove("winning-box");
  box2.classList.remove("winning-box");
  box3.classList.remove("winning-box");
  box4.classList.remove("winning-box");
  box5.classList.remove("winning-box");
  box6.classList.remove("winning-box");
  box7.classList.remove("winning-box");
  box8.classList.remove("winning-box");
  box9.classList.remove("winning-box");

  player1Text.classList.add("active-player");
  player2Text.classList.remove("active-player");
  player1Text.classList.remove("inactive-player");
  player2Text.classList.add("inactive-player");

  box1.classList.remove("X");
  box2.classList.remove("X");
  box3.classList.remove("X");
  box4.classList.remove("X");
  box5.classList.remove("X");
  box6.classList.remove("X");
  box7.classList.remove("X");
  box8.classList.remove("X");
  box9.classList.remove("X");

  box1.classList.remove("O");
  box2.classList.remove("O");
  box3.classList.remove("O");
  box4.classList.remove("O");
  box5.classList.remove("O");
  box6.classList.remove("O");
  box7.classList.remove("O");
  box8.classList.remove("O");
  box9.classList.remove("O");
});
