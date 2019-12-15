(function () {
    var name = document.getElementById("userName");
    var spanName = document.getElementById("sName");
    var pass = document.getElementById("pass");
    var spanPass = document.getElementById("sPass");
    var spanCheck = document.getElementById("sCheck");
    var checkBox = document.getElementById("check");
    var button = document.getElementById("but");

    //Part1
    // name.setAttribute("value", "username");
    // name.style.border = "2px solid green"


    // spanName.style.color = "green";


    // pass.setAttribute("value", "********");
    // pass.style.border = "2px solid green";


    // spanPass.style.color = "green";

    // document.getElementById("chek").checked = true;


    // spanCheck.style.color = "green";

    // document.getElementById("but").innerHTML = "Login & Remember me"

    //Part2
    // name.addEventListener("keyup", function () {
    //     if (name.value.length > 3) {
    //         name.style.border = "2px solid green";
    //         spanName.style.color = "green";
    //     } else {
    //         name.style.border = "2px solid red";
    //         spanName.style.color = "red";
    //     }
    // });
    // pass.addEventListener("keyup", function () {
    //     if (pass.value.length > 3) {
    //         pass.style.border = "2px solid green";
    //         spanPass.style.color = "green";
    //     } else {
    //         pass.style.border = "2px solid red";
    //         spanPass.style.color = "red";
    //     }
    // });
    // checkBox.addEventListener("change", function () {
    //     if (checkBox.checked) {
    //         button.innerHTML = "Login & Remember";
    //     } else {
    //         button.innerHTML = "Login";
    //     }
    // });

    // Part 3 
    var pName = document.getElementById("pName");
    pName.style.display = "none";
    var pPass = document.getElementById("pPass");
    pPass.style.display = "none";
    button.disabled = true;


    name.addEventListener("keyup", function () {
        if (name.value.length > 3) {
            name.style.border = "2px solid green";
            spanName.style.color = "green";
            pName.style.display = "none";
            validation();
        } else {
            name.style.border = "2px solid red";
            spanName.style.color = "red";
            pName.style.display = "block";
            pName.innerHTML = "Username should be more than 3 symbols long";
            pName.style.color = "red";
            validation();
        }
    });

    pass.addEventListener("keyup", function () {
        if (pass.value.length > 3) {
            pass.style.border = "2px solid green";
            spanPass.style.color = "green";
            pPass.style.display = "none";
            validation();
        } else {
            pass.style.border = "2px solid red";
            spanPass.style.color = "red";
            pPass.style.display = "block";
            pPass.innerHTML = "Password should be more than 3 symbols long";
            pPass.style.color = "red";
            validation();
        }
    });

    function validation() {
        if (pass.value.length <= 3 || name.value.length <= 3) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }

    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            button.innerHTML = "Login & Remember";
        } else {
            button.innerHTML = "Login";
        }
    });

})();