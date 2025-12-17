// Мобильное меню
const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}

// Подсветка активной страницы
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(a => {
  if (a.getAttribute("href") === path) a.classList.add("active");
});

// Валидация формы (email должен содержать @)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    const email = document.getElementById("email");
    const err = document.getElementById("error");
    err.textContent = "";

    if (!email.value.includes("@")) {
      e.preventDefault();
      err.textContent = "Ошибка: Email должен содержать символ @";
      email.focus();
      return;
    }

    // Демонстрация отправки (без сервера)
    e.preventDefault();
    form.reset();
    err.textContent = "Сообщение отправлено (демо).";
  });
}