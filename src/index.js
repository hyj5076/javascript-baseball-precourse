
/* 
 * Range 주의하기, MissionUtils 먼저 끌어와야 되는구나!
 * console.log(MissionUtils.Random.pickNumberInRange(1, 9));
 * console.log(Random.pickNumberInRange(1, 9)); 
 */

function makeRandomNumber() {
    let randomNumber = '';

    for (let i = 0; i < 3; i++) {
        let tryNum;

        do {
            tryNum = MissionUtils.Random.pickNumberInRange(1, 9);
        } while (randomNumber.includes(tryNum.toString())); // 중복 없는 세자리 수

        randomNumber += tryNum.toString();
    }

    return randomNumber;
}

const uniqueNumber = makeRandomNumber();
console.log(uniqueNumber);

export default makeRandomNumber;

/* export default function BaseballGame() {
    this.randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    console.log(this.randomNumber);

    this.play = function (computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };
}

const game = new BaseballGame();
console.log(game.randomNumber); */