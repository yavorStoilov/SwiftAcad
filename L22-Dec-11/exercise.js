var usernameLabel = document.querySelector(".username-label");
var usernameInput = document.myForm.elements.usernameInput;

var passwordLabel = document.querySelector(".password-label");
var passwordInput = document.myForm.elements.passwordInput;

var checkboxLabel = document.querySelector(".remember-label");
var checkbox = document.myForm.elements.type;

var submitBtn = document.getElementById("submitBtn");


// PART 1:
/*
// username
usernameInput.value = "my username";
usernameInput.style.border = "2px solid green";
usernameLabel.style.color = "green";

// password
passwordInput.value = "my password";
passwordInput.style.border = "2px solid green";
passwordLabel.style.color = "green";

// checkbox
checkbox.setAttribute("checked", "checked");
checkboxLabel.style.color = "green";

// button
submitBtn.value = "Login & Remember";
*/

// PART 2:

usernameInput.addEventListener("keyup", function() {
	if (usernameInput.value.length > 2) {
		usernameInput.style.border = "2px solid green";
		usernameLabel.style.color = "green";
	} else {
		usernameInput.style.border = "2px solid red";
		usernameLabel.style.color = "red";
	}
});

passwordInput.addEventListener("keyup", function() {
	if (passwordInput.value.length > 2) {
		passwordInput.style.border = "2px solid green";
		passwordLabel.style.color = "green";
	} else {
		passwordInput.style.border = "2px solid red";
		passwordLabel.style.color = "red";
	}
});

checkbox.addEventListener("change", function(event) {
	if (checkbox.checked) {
		submitBtn.value = "Login & Remember";
	} else {
		submitBtn.value = "Login";
	}
});
