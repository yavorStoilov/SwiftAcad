(function() {
	'use strict';

	document.cookie = "user=john";
	document.cookie = "car=nissan; expires=Thu, 13 Dec 2019 23:59:59 UTC; path=/subfolder";

	localStorage.setItem("bla", "123");
	sessionStorage.setItem("123", "qwe");
	console.log(localStorage.getItem("bla"));

})();
