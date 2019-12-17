var loginBtn = document.querySelector('#loginBtn');
var logoutBtn = document.querySelector('#logOutBtn');
var loginPopup = document.querySelector('.login-popup');
var usernameInput = document.loginForm.elements.usernameInput;
var passwordInput = document.loginForm.elements.passwordInput;
var submitBtn = document.querySelector('#submitBtn');

loginBtn.addEventListener('click', showLoginPopup);
logoutBtn.addEventListener('click', logout);

function showLoginPopup() {
	loginPopup.style.display = 'flex';
	submitBtn.addEventListener('click', login);
}

function login() {
	document.cookie = "login=true; path=/";
	hideLoginIfCookie();
	usernameInput.value = '';
	passwordInput.value = '';
	loginPopup.style.display = 'none';
}

function logout() {
	loginBtn.style.display = 'inline';
	logoutBtn.style.display = 'none';
	document.cookie = "login=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function hideLoginIfCookie() {
	if (document.cookie) {
		loginBtn.style.display = 'none';
		logoutBtn.style.display = 'inline';
	}
}

hideLoginIfCookie();
