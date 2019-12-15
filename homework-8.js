

// document.nameForm.nameInput.addEventListener("keyup", showHint);

// function showHint() {
// 	var str = document.nameForm.nameInput.value;
// 	if (str.length == 0) {
// 		document.getElementById("txtHint").innerHTML = "";
// 		return;
// 	} else {
// 		var xhr = new XMLHttpRequest();
// 		xhr.onreadystatechange = function () {
// 			if (this.readyState === 4) {
// 				if (this.status === 200) {
// 					document.getElementById("txtHint").innerHTML = this.responseText;
// 				} else {
// 					document.getElementById("txtHint").innerHTML = "Error: " + this.status;
// 				}
// 			}
// 		};
// 		xhr.open("GET", "namehint.php?q=" + str, true);
// 		xhr.send();
// 	}
// }

//Ajax request with jQuery
$(document).ready(function () {
	$("input[name=nameInput]").keyup(load);
});

function load() {
	var $str = $("input[name=nameInput]").val();
	var $txtHint = $("#txtHint");
	$.ajax({
		method: "GET",
		url: "namehint.php?q=" + $str
	}).done(function (data) {
		console.log(data);
		if ($str.length == 0) {
			$txtHint.html("");
		}
		$txtHint.html(data);
	}).fail(function (errorMessage) {
		$txtHint.html("Error" + errorMessage);
	});
}

