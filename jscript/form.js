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
                Firs tname: $('#firstName').val(),
                Second name: $('#secondName').val(),
                Email address: $('#email').val(),
                Personal webpage: $('#website').val(),
                Subject: $('#subject').val(),
                Message: $('#message').val()},
            dataType: "json"
        });
    });

});