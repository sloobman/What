document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("lections").style.display = "none";
    document.getElementById("hideLections-btn").style.display = "none";
    const showLectionsButton = document.getElementById("lections-btn");
    const lectionsTable = document.getElementById("lections");
    const hideLectionsButton = document.getElementById("hideLections-btn");
    if (showLectionsButton&&lectionsTable){
        showLectionsButton.addEventListener("click", () => {
            lectionsTable.style.display = "table";
            lectionsTable.style.transition = "display 0.3s easy";
            showLectionsButton.style.display = "none";
            hideLectionsButton.style.display = "block";
        })
    }
    if (hideLectionsButton&&lectionsTable){
        hideLectionsButton.addEventListener("click", () => {
            lectionsTable.style.display = "none";
            lectionsTable.style.transition = "animation fadeInOut 0.6s ease-in-out";
            hideLectionsButton.style.display = "none";
            showLectionsButton.style.display = "block";
        })
    }
})




document.getElementById("first-semester-btn").style.display = "none";

document.addEventListener("DOMContentLoaded", () => {
    const firstSemesterButton = document.getElementById("first-semester-btn");
    const secondSemesterButton = document.getElementById("second-semester-btn");
    const practicesTable = document.getElementById("practices-table");

    if (secondSemesterButton && practicesTable) {
        
        secondSemesterButton.addEventListener("click", () => {
            const secondSemesterTopics = [
                "Базовое бэкенд-приложение",
                "HTTP-запросы",
                "JSON и работа с ним",
                "HTTP-ответы",
                "Проектирование API",
                "Роутинг и его настройка",
                "NoSQL базы данных",
                "Обеспечение авторизации и доступа пользователей",
                "Работа сторонних сервисов уведомления и авторизации",
                "Основы ReactJS",
                "Работа с компонентами динамической DOM",
                "Использование хуков в React",
                "Основы микросервисной архитектуры",
                "Разработка классических модулей веб-приложений",
            ];
            secondSemesterButton.style.display = "none";
            firstSemesterButton.style.display = "block";
            // Очищаем старые строки
            const tbody = practicesTable.querySelector("tbody");
            tbody.innerHTML = "";

            // Добавляем темы второго семестра
            secondSemesterTopics.forEach((topic, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${index + 1}</td><td>${topic}</td><td><input type="checkbox" class="form-check-input"></td><td><input type="checkbox" class="form-check-input"></td>`;
                tbody.appendChild(row);
            });
        });
    }
    if (firstSemesterButton && practicesTable) {

        firstSemesterButton.addEventListener("click", () => {
            
            const firstSemesterTopics = [
                "Основы языка HTML",
                "Формы и кнопки в HTML",
                "Таблицы и интерактивные элементы HTML",
                "Основы работы с CSS",
                "Работы с классами в CSS",
                "Работа с сетками разметками в HTML",
                "Адаптивная верстка",
                "Bootstrap",
                "Основы языка JavaScript",
                "Базовые задачи JavaScript",
                "DOM структура приложений и работа с объектами в языке JS",
                "Встраивание скриптов",
                "Отладка сценариев",
                "Анимации и работа с ними",
                "GitHub",
                "Защита проекта"
            ];
            firstSemesterButton.style.display = "none";
            secondSemesterButton.style.display = "block";
            // Очищаем старые строки
            const tbody = practicesTable.querySelector("tbody");
            tbody.innerHTML = "";

            // Добавляем темы второго семестра
            firstSemesterTopics.forEach((topic, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${index + 1}</td><td>${topic}</td><td><input type="checkbox" class="form-check-input"></td><td><input type="checkbox" class="form-check-input"></td>`;
                tbody.appendChild(row);
            });
        });
    }
});








