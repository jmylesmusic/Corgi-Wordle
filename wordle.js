function firstGuess() {
    const guessOne = document.querySelectorAll(".guess-one li.no");
    for (let i = 0; i < guessOne.length; i++) {
    guessOne[i].style.backgroundColor = "var(--grey)";
    }
};
setTimeout(firstGuess, 4000);

function secondGuess() {
    const guessTwo = document.querySelectorAll(".guess-two li.no");
    for (let i = 0; i < guessTwo.length; i++) {
    guessTwo[i].style.backgroundColor = "var(--grey)";
    }
};

setTimeout(secondGuess, 9000);

function thirdGuess() {
    const guessThreeWrong = document.querySelectorAll(".guess-three li.no");
    for (let i = 0; i < guessThreeWrong.length; i++) {
    guessThreeWrong[i].style.backgroundColor = "var(--grey)";
    }
    const guessThreeIn = document.querySelectorAll(".guess-three li.in");
    for (let i = 0; i < guessThreeIn.length; i++) {
    guessThreeIn[i].style.backgroundColor = "var(--yellow)";
    }
};

setTimeout(thirdGuess, 13000);


function fourthGuess() {
    const guessFourWrong = document.querySelectorAll(".guess-four li.no");
    for (let i = 0; i < guessFourWrong.length; i++) {
    guessFourWrong[i].style.backgroundColor = "var(--grey)";
    }
    const guessFourIn = document.querySelectorAll(".guess-four li.in");
    for (let i = 0; i < guessFourIn.length; i++) {
    guessFourIn[i].style.backgroundColor = "var(--yellow)";
    }
    const guessFourRight = document.querySelectorAll(".guess-four li.yes");
    for (let i = 0; i < guessFourRight.length; i++) {
    guessFourRight[i].style.backgroundColor = "var(--green)";
    }
};

setTimeout(fourthGuess, 17500);

function fifthGuess() {
    const guessFiveWrong = document.querySelectorAll(".guess-five li.no");
    for (let i = 0; i < guessFiveWrong.length; i++) {
    guessFiveWrong[i].style.backgroundColor = "var(--grey)";
    }
    const guessFiveIn = document.querySelectorAll(".guess-five li.in");
    for (let i = 0; i < guessFiveIn.length; i++) {
    guessFiveIn[i].style.backgroundColor = "var(--yellow)";
    }
    const guessFiveRight = document.querySelectorAll(".guess-five li.yes");
    for (let i = 0; i < guessFiveRight.length; i++) {
    guessFiveRight[i].style.backgroundColor = "var(--green)";
    }
};

setTimeout(fifthGuess, 22600);

function lastGuess() {
    const lastGuessRight = document.querySelectorAll(".final-guess li.yes");
    for (let i = 0; i < lastGuessRight.length; i++) {
    lastGuessRight[i].style.backgroundColor = "var(--green)";
    }
};

setTimeout(lastGuess, 27600);