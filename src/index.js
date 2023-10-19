// import makeRandomNumber from "./utilFuntions/makeRandomNumber";

/* const uniqueNumber = makeRandomNumber();
console.log(uniqueNumber); */

function userInputAlert (input) {
    if (isNaN(input)) { 
        return false; // 숫자 아닐 시
    } 
    if (input.length !== 3) { 
        return false; // 세 자리 아닐 시
    }
    const uniqueDigits = new Set(input.split(""));
    if (uniqueDigits.size !== input.length) {
        return false; // 중복된 숫자 포함 시
    }
    return true; // 검증완료
}

/* export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };
}

const game = new BaseballGame();
console.log(game.randomNumber); */