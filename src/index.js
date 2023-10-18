
// import makeRandomNumber from "./utilFuntions/makeRandomNumber";

function userNumber() {
    const submitBtn = document.getElementById('submit');
    const userInputForm = document.getElementById('user-input');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(userInputForm.value);
        return userInputForm.value;
    });
}

userNumber();

/* export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };
}

const game = new BaseballGame();
console.log(game.randomNumber); */