(function () {
    var name = document.getElementById("userName");
    name.setAttribute("value", "username");
    name.style.border = "2px solid green"

    var spanName = document.getElementById("sName");
    spanName.style.color = "green";

    var pass = document.getElementById("pass");
    pass.setAttribute("value", "********");
    pass.style.border = "2px solid green";

    var spanPass = document.getElementById("sPass");
    spanPass.style.color = "green";

    document.getElementById("chek").checked = true;

    var spanCheck = document.getElementById("sCheck");
    spanCheck.style.color = "green";

    document.getElementById("but").innerHTML = "Login & Remember me"



})();