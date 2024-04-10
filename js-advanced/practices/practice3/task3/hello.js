import { getAuthedLogin, logoutUser } from "./storage.js";

const hellMessageEl = document.querySelector(".helloMessage");
const logoutEl = document.querySelector(".logout");

const authedUser = getAuthedLogin();
if (!authedUser) {
    alert("You must be logged in to view this page");
    location.href = "login.html";
}

hellMessageEl.textContent = `Hello ${authedUser}`;

logoutEl.addEventListener('click', () => {
    logoutUser();
    location.href = "login.html";
});

//eslint - отладчик
