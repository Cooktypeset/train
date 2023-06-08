// Задача 3
// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.
// preventDefault - забороняэ перезавант сторінки.

const userDate = {
    email: 'name@gmail.com',
    password: 'secret777',
}
const keyLogin = 'keyLogin';
const form = document.querySelector('#login-form');
form.addEventListener('submit', formSubmit);
const data = JSON.parse(localStorage.getItem(keyLogin));
if (JSON.parse(localStorage.getItem(keyLogin))){
    form.elements.email.disabled = true;
    form.elements.password.disabled = true;
    form.elements.button.textContent = 'logout';
    form.elements.email.value = data.email;
     form.elements.password.value = data.password;
}
function formSubmit(event) {
    event.preventDefault()
    if (JSON.parse(localStorage.getItem(keyLogin))) {
        form.elements.email.disabled =false;
        form.elements.password.disabled = false;
        form.elements.button.textContent = 'login';
        localStorage.removeItem(keyLogin);
        form.reset();
        return;
    }
    if (form.elements.email.value !== userDate.email || form.elements.password.value !== userDate.password) {
        alert ('Неправильно введені данні')
          return;
    }
    const dateUser = {
        email: form.elements.email.value,
        password: form.elements.password.value,
    }
    console.log(dateUser)
    localStorage.setItem(keyLogin, JSON.stringify(dateUser));
    form.elements.email.disabled = true;
    form.elements.password.disabled = true;
    form.elements.button.textContent = 'logout';
}
 