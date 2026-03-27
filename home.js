const formContainer = document.querySelector('.form-box');
const start_btn = document.querySelector(".start-btn");

fetch('home-login.html')
  .then(response => response.text())
  .then(html => {
    formContainer.innerHTML = html;
    console.log('Form content loaded successfully.');
    FormListeners();
  })
  .catch(error => {
    console.error('Error loading the form:', error);
  });

function FormListeners() {
    const close_btn = document.querySelector(".close");
    const register_btn = document.querySelector(".register-link");
    const login_btn = document.querySelector(".login-link");
    const form = document.querySelector(".form-box");
    const menu = document.querySelector(".menu-list");
    const menu_btn = document.querySelector("#menu");
    const eye_open_1 = document.querySelector(".login-eye .eye-off");
    const eye_off_1 = document.querySelector(".login-eye .eye-open");
    const eye_open_2 = document.querySelector(".register-eye .eye-off");
    const eye_off_2 = document.querySelector(".register-eye .eye-open");
    const eye_open_3 = document.querySelector(".register-2-eye .eye-off");
    const eye_off_3 = document.querySelector(".register-2-eye .eye-open");
    const password_1 = document.querySelector(".login-eye");
    const password_2 = document.querySelector(".register-eye");
    const password_3 = document.querySelector(".register-2-eye");
    var password_login = document.getElementById("password-login");
    var password_register = document.getElementById("password-register");
    var password_check = document.getElementById("password-check");

    register_btn.addEventListener('click', () => {
        form.classList.add("change-form");
    });
    login_btn.addEventListener('click', () => {
        form.classList.remove("change-form");
    });
    start_btn.addEventListener('click', () => {
        form.classList.add("active-popup");
    });
    close_btn.addEventListener('click', () => {
        form.classList.remove("active-popup");
    });
    menu_btn.addEventListener('change', () => {
        if (menu_btn.checked){
        menu.classList.add("active-menu");
        }
        else{
        menu.classList.remove("active-menu");
        }
    });
    eye_open_1.addEventListener('click', () => {
        password_1.classList.add("open");
        password_login.type="text";
    });
    eye_off_1.addEventListener('click', () => {
        password_1.classList.remove("open");
        password_login.type="password";
    });
    eye_open_2.addEventListener('click', () => {
        password_2.classList.add("open");
        password_register.type="text";
    });
    eye_off_2.addEventListener('click', () => {
        password_2.classList.remove("open");
        password_register.type="password";
    });
    eye_open_3.addEventListener('click', () => {
        password_3.classList.add("open");
        password_check.type="text";
    });
    eye_off_3.addEventListener('click', () => {
        password_3.classList.remove("open");
        password_check.type="password";
    });
}

start_btn.addEventListener('click', ()=> {
    formContainer.classList.add("active-popup");
})