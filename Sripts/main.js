let name = "alex";
let age = 17; 

if (age >= 18) {
    console.log("Вы совершеннолетний.");
} else {
    console.log("Вы несовершеннолетний.");
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}


const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];
console.log("Лекции:");
lectures.forEach((lecture, index) => console.log(`${index + 1}. ${lecture}`));

console.log("Практики:");
practices.forEach((practice, index) => console.log(`${index + 1}. ${practice}`));
function arrayToString(array) {
    return array.join(", ");
}

console.log("Темы лекций:", arrayToString(lectures));
console.log("Темы практик:", arrayToString(practices));

function filterTopicsStartingWithO(topics) {
    return topics.filter(topic => topic.startsWith("О"));
}

const lectureTopics = ['Основы JavaScript', 'Тема 2', 'Операторы в JS', 'Тема 4'];
const filteredTopics = filterTopicsStartingWithO(lectureTopics);

console.log("Темы, начинающиеся на 'О':", filteredTopics);




const h1 = document.querySelector("h1");
if (h1) {
    h1.textContent = "Добро пожаловать на наш сайт!";
}
const h2 = document.querySelector("h2");
if (h2) {
    h2.style.color = "red";
}
const paragraph = document.querySelector("p");
if (paragraph) {
    paragraph.textContent = "Это новый текст параграфа.";
}
const video = document.querySelector("video");
if (video) {
    video.style.display = "none";
}
const formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    comment: "",
    printData() {
        console.log(`
            Имя: ${this.name}
            E-mail: ${this.email}
            Телефон: ${this.phone}
            Дата: ${this.date}
            Комментарий: ${this.comment}
        `);
    }
};
function submitForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const date = document.querySelector("#date").value.trim();
    const comment = document.querySelector("#comment").value.trim();
    if (!name || !email || !comment) {
        alert("Поля имя, e-mail и комментарий не должны быть пустыми.");
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert("Поле телефон должно содержать только цифры.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Введите корректный e-mail.");
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    formData.printData();
}

const form = document.querySelector("#my-form");
if (form) {
    form.addEventListener("submit", submitForm);
}
