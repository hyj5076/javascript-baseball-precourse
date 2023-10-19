export default function makeRandomNumber() {
    let randomNumber = '';
    for (let i = 0; i < 3; i++) {
        let tryNumber;
        do {
            tryNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        } while (randomNumber.includes(tryNumber.toString()));
        randomNumber += tryNumber.toString();
    }
    return randomNumber;
}
// 다시 사용하려면 변수에 담아야 함
const uniqueNumber = makeRandomNumber();
console.log(uniqueNumber);

