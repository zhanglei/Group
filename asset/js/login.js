
define('/asset/js/login', function(require, exports, module) {

    window.$ = window.jQuery = require('jquery');

    $('#login').on('click', function() {

        $.post('/doLogin', $('#login-form').serialize(), function(res){
            res = jQuery.parseJSON(res);
            if (res.status == 1) {
                window.location.href = "/login";
            } else {
                $('.info').show();
                $('.alert-info').html(res.info);
            }
        }) 

    })
});