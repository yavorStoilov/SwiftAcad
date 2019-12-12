(function () {
	'use strict';

	document.nameForm.nameInput.addEventListener("keyup", showHint);

	function showHint() {
		var str = document.nameForm.nameInput.value;
		if (str.length == 0) {
			document.getElementById("txtHint").innerHTML = "";
			return;
		} else {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (this.readyState === 4) {
					if (this.status === 200) {
						console.log(this)
						document.getElementById("txtHint").innerHTML = this.responseText;
					} else {
						document.getElementById("txtHint").innerHTML = "Error: " + this.status;
					}
				}
			};
			xhr.open("GET", "namehint.php?q=" + str, true);
			xhr.send();
		}
	}

	// $.ajax({
	// 	method: "GET",
	// 	url: "namehint.php?q=" + str
	// }).done(function () {
	// 	alert("success");
	// }).fail(function () {
	// 	alert("error");
	// }).always(function () {
	// 	alert("complete");
	// });

}) ();
