
// Додаємо до проекту біліотеку через термінал
// $ npm i --save lodash.throttle
import throttle from "lodash.throttle";

// створюємо змінну для зручності
const STORAGE_KEY = 'feedback-form-state';
let textForStorage ={};

const formInputEL = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input'),
};

console.log(formInputEL);


// Запускаємо слухачів подій
formInputEL.form.addEventListener('submit', onForfSubmit);
formInputEL.textarea.addEventListener('input', throttle(onTextareaInput, 500));
formInputEL.input.addEventListener('input', throttle(onInputInput, 500));

saveStorageText ()

// Команди при відправки форми Submite
function onForfSubmit(evt){
    // Зупиняємо відправку форми за замовченням
    evt.preventDefault();
    // Виводимо у консоль данні відправки
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    // Очищюємо поля
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

// Команди при вводі тексту в textarea та input
function onTextareaInput(evt) {
    textForStorage.message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));
        // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
};

function onInputInput(evt) {
    textForStorage.email = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));
        // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
};

// Команда перевірки наявного тексту в STORAGE_KEY при старті
function saveStorageText () {
    const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMassege.message) {
        formInputEL.textarea.value = savedMassege.message;
    }
    if (savedMassege.email) {
        formInputEL.input.value = savedMassege.email;
    }
};




