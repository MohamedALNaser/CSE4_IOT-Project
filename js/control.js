let controlSec = document.querySelector("div.control-section .container");

function getRandom() {
    let randomNum = Math.trunc((Math.random() - 0.4000001) * 100);

    return randomNum >= 0 && randomNum <= 50 ? randomNum : getRandom();
}

let randomNum = getRandom();
// ///// // Rows // ///// //
let openControl = document.querySelector(".open-control");
let guessContainer = document.querySelector(".guessFiled");
guessContainer.style.display = `none`;
let guessResult = document.querySelector(".guessResult");
let controlSYS = document.querySelector(".control-system");
controlSYS.style.display = `none`;
// ///// // Rows // ///// //

openControl.addEventListener("click", () => {
    openControl.style.display = `none`;
    guessContainer.style.display = `flex`;
});

// ///// //
let guessFiled = document.querySelector(".guessFiled input");
let check = document.querySelector(".checkGuess");
let maxTries = 6;
let guessResultSpan = document.querySelector(".guessResult span");

check.addEventListener("click", () => {
    if (maxTries > 0) {
        maxTries--;
        if (Number.parseInt(guessFiled.value) == randomNum) {
            guessResultSpan.innerHTML = `Guess Num is Corret`;
            // guessResultSpan.innerHTML=" ";
            isCorrectFlage = true;
            setInterval(() => {
                openControl.parentElement.style.display = `none`;
                guessContainer.style.display = `none`;
                guessResultSpan.style.display = `none`;
                controlSYS.style.display = `flex`;
            }, 1000);
        } else if (Number.parseInt(guessFiled.value) > randomNum) {
            guessResultSpan.innerHTML = `Try again Guess Num is too High , you have  ${maxTries} tries`;
        }
        if (Number.parseInt(guessFiled.value) < randomNum) {
            guessResultSpan.innerHTML = `Try again Guess Num is too Low , you have ${maxTries} tries`;
        }
    } else {
        openControl.parentElement.style.display = `none`;
        guessContainer.style.display = `none`;
        guessResultSpan.innerHTML = `Sorry you can't try again, you have ${maxTries} tries`;
        maxTries = 6;
    }
});