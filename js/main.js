//accordion
const ask = document.querySelectorAll('[data-name="ask"]');

ask.forEach(function (item) {
    item.addEventListener('click', function () {
        // Убираем класс 'hidden' у следующего элемента (ответа)
        const answer = this.nextElementSibling;
        answer.classList.toggle('hidden');

        // Находим изображение с классом 'question__img' и src 'img/minus.svg'
        const minusImg = this.querySelector('img[src="img/minus.svg"]');
        minusImg.classList.toggle('hidden');

        // Находим изображение с классом 'question__img' и src 'img/plus.svg'
        const plusImg = this.querySelector('img[src="img/plus.svg"]');
        plusImg.classList.toggle('hidden');
    });
});



// Button and checkbox in form
function toggleSubmitButton() {
    let checkbox = document.getElementById('privacy-checkbox');
    let submitButton = document.getElementById('submit-button');
    submitButton.disabled = !checkbox.checked;
}