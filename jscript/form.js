$(function() {
    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/viktor_hordubey@yahoo.com",
            method: "POST",
            data: { 
                Firstname: $('#firstName').val(),
                Secondname: $('#secondName').val(),
                Emailaddress: $('#email').val(),
                Personalwebpage: $('#website').val(),
                Subject: $('#subject').val(),
                Message: $('#message').val()},
            dataType: "json"
        });
    });

});