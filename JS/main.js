$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#email').on('keyup', function() {
        var email = $(this).val().trim();
        
        if (email.indexOf('@') === -1) {
            $(this).val(email + '@');
        }
    });
})
