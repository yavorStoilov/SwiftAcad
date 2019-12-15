(function () {
    "use strict";
    var username = document.getElementById("username");
    var labelName = document.getElementById("labelName");
    var password = document.getElementById("password");
    var labelPass = document.getElementById("labelPass");
    var checkbox = document.getElementById("remember");
    var labelCheck = document.getElementById("labelCheck");
    var login = document.getElementById("login");
    login.disabled = true;
    var change = document.getElementById("change");
    var userMessage = document.getElementById("user-message");
    userMessage.style.display = "none";
    var userPass = document.getElementById("user-pass");
    userPass.style.display = "none";


    function changeColor(element, labelElement, color) {
        element.style.borderColor = color;
        labelElement.style.color = color;
    }
    function log(text) {
        login.value = text;
    }
    function accesDenied() {
        if ((username.value.length > 3) && (password.value.length > 3)) {
            login.disabled = false;

        }
        else {
            login.disabled = true;
        }

    }
    function changeProperties() {
        username.value = "username";
        changeColor(username, labelName, "green");
        password.value = 12345678;
        changeColor(password, labelPass, "green");
        checkbox.checked = true;
        login.disabled = false;
        labelCheck.style.color = "green";
        log("Login & Remember");
    }

    change.addEventListener("click", changeProperties);
    username.addEventListener("keyup", function () {
        if ((username.value).length > 3) {
            changeColor(username, labelName, "green");
            userMessage.style.display = "none";
            accesDenied();

        }
        else if (username.value.length == 0) {
            changeColor(username, labelName, "black");
            userMessage.innerText = "Plese insert your username";
            userMessage.style.display = "block";
            accesDenied();

        }
        else {
            changeColor(username, labelName, "red");
            userMessage.innerText = "Username should be more than 3 symbols long";
            userMessage.style.display = "block";
            accesDenied();

        }


    })
    password.addEventListener("keyup", function () {
        if ((password.value).length > 3) {
            changeColor(password, labelPass, "green");
            userPass.style.display = "none";
            accesDenied();
        }
        else if (password.value.length == 0) {
            changeColor(password, labelPass, "black");
            userPass.innerText = "Please insert your password";
            userPass.style.display = "block";
            accesDenied();

        }
        else {
            changeColor(password, labelPass, "red");
            userPass.innerText = "Password should be more than 3 symbols long";
            userPass.style.display = "block";
            accesDenied();

        }

    })
    checkbox.addEventListener("click", function () {
        if (checkbox.checked == true) {
            log("Login & Remember")
        }
        else {
            log("Login");
        }
    })

})();