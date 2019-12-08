(function () {
    'use strict';
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("h1").innerHTML = "PAGE DOM LOADED";
    });
    window.onload = function () {
        document.getElementById("h2").innerHTML = "PAGE BOM LOADED";
    };
    var div = document.createElement("div");
    document.body.appendChild(div);
    document.addEventListener("click", function (event) {
        div.textContent = "Position X: " + event.clientX + " and position y: " + event.clientY;
    });
})();