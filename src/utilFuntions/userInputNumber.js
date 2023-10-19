export default function userNumber() {
    const submitBtn = document.getElementById('submit');
    const userInputForm = document.getElementById('user-input');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(userInputForm.value);
        return userInputForm.value;
    });
}

userNumber();