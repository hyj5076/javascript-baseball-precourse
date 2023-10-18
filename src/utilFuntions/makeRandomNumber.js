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

const uniqueNumber = makeRandomNumber();
console.log(uniqueNumber);

