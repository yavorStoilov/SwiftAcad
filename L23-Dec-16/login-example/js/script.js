// selectors here
var btnLogin = document.getElementById("loginBtn");
var btnSubmit = document.getElementById("submitBtn");
var btnLogOut = document.getElementById("logOutBtn");
// event listeners here
btnLogin.addEventListener("click",showLoginPopup);
btnSubmit.addEventListener("click",login);
btnLogOut.addEventListener("click",logout);
function showLoginPopup() {
	document.querySelector(".login-popup").style.display = "flex";
}

function login() {
	// logic
	document.cookie = "login = true";
	document.querySelector(".login-popup").style.display = "none";
	btnLogin.style.display = "none";
	btnLogOut.style.display = "inline";
}

function logout() {
	// logic
	btnLogOut.style.display = "none";
	btnLogin.style.display = "inline";
	document.cookie = "login = true;  expires=Thu, 13 Dec 2019 23:59:59 UTC"
}

function hideLoginIfNoCookie() {
	// logic
}
