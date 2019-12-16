(function() {
	'use strict';
    
    var userName = $('#username');
    var password = $('#password');
    var checkBox = $('#checkbox');
    var btn= $('#btn');
    
    userName.val('userName');
    password.val('1234');
    checkBox.prop("checked", true );
    btn.attr('value', 'Login & Remember');
    $('.container').css('color', 'green');

    if(userName.val().length < 3){
        alert(3)
        userName.css('color, red');
    }


})();