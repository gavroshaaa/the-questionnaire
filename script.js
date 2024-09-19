const form = document.querySelector(".form");
const userName = document.getElementById("name");
const secondName = document.getElementById("secondName");
const userEmail = document.getElementById("email");
const userPhone = document.getElementById("phone");
const checkbox = document.getElementById("agree");
const giff = document.querySelector(".giff");
const div = document.createElement('div');


giff.hidden = true

function sendForm() {
    div.classList.add('sendForm')
    div.textContent = 'Анкета успешно отправлена!';
    giff.hidden = false;
    form.prepend(div);
    setTimeout(() => {
        giff.hidden = true;
        div.classList.remove('sendForm');
    }, 5000)
}

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: gavroshaaa'
            },
            body: JSON.stringify({
                "name": userName.value,
                "secondName": secondName.value,
                "phone": userPhone.value,
                "email": userEmail.value,
                "agree": checkbox.checked = true,
            }),
        })
        .then((result) => {
            if (result) {
                form.reset();
                sendForm();
            } else {
                return alert("Проверьте введенные данные и попробуйте снова!")
            }
        })
        // Здесь твой код
});