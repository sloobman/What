function showMessage(message) {
    console.log(message);
}
showMessage("Скрипт загружен!");

function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
}
logCurrentTime();

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    } else {
        console.log(`Элемент не найден.`);
    }
}

function updateHeadingFromUTM() {
    const queryParams = new URLSearchParams(window.location.search);
    const utmTerm = queryParams.get("utm_term");

    const h1 = document.querySelector("h1");
    if (utmTerm) {
        h1.textContent = utmTerm;
    } else {
        console.log("utm_term отсутствует");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    resetBackgroundColor();

    changeBackgroundColor("lightblue");

    toggleVisibility(".content");
    updateHeadingFromUTM() ;
});

document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    if (h1) {
        h1.addEventListener("mouseover", () => {
            h1.style.transform = "scale(1.01)";
            h1.style.transition = "transform 0.3s";
        })
        h1.addEventListener("mouseout", () => {
            h1.style.transform = "scale(1)";
        });
        h1.addEventListener("click", () => {
            alert("Вы кликнули на заголовок - так держать!");
        });
    }
    const paragraph = document.getElementById("text");
    if (paragraph){
        paragraph.addEventListener("click", () => {
            paragraph.style.backgroundColor = "green";
            paragraph.style.transition = "background 0.3s ease";

        }
        )
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const studentPhoto = document.getElementById("student-photo");

    if (studentPhoto) {

        studentPhoto.addEventListener("mouseenter", () => {
            studentPhoto.style.transform = "rotate(360deg) scale(1.1)";
            studentPhoto.style.transition = "transform 0.9s";
        });

        studentPhoto.addEventListener("mouseleave", () => {
            studentPhoto.style.transform = "rotate(-360deg)";
            studentPhoto.style.transition = "transform 0.9s";
        });

        studentPhoto.addEventListener("click", () => {
            studentPhoto.src = "../Media/cot2.jpg";
        });

        studentPhoto.addEventListener("dblclick", () => {
            alert("Не налегай, у меня не так много любимых картиночек");
        });
    }
});
