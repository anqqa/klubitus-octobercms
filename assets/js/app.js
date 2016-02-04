(function($) {
    "use strict";

    // Handle Ajax error messages
    $(window).on('ajaxErrorMessage', function(event, message) {
        $('#alerts').html($('<li>').addClass('alert alert--error').html(message));

        event.preventDefault();
    });

    $(window).on('ajaxInvalidField', function(event, field, fieldName, messages, firstInvalid) {

        // Clear old errors
        if (firstInvalid) {
            $('.input--error')
                .removeClass('input--error')
                .find('.input__message')
                    .remove();

            $('.input__field--error').removeClass('input__field--error');
            $('.input__message--error').remove();
        }

        var $field = $(field);
        var $error = $('<p>')
            .addClass('input__message')
            .html(messages.join('<br>'));


        if ($field.hasClass('input__field') && $field.parent('.input')) {
            $field.parent('.input').addClass('input--error');
        }
        else {
            $field.addClass('input__field input__field--error');
            $error.addClass('input__message--error');
        }

        $field.after($error);

        event.preventDefault();
    });


    // Dismiss alerts
    $('#alerts').on('click', '.alert .button--close', function(event) {
        event.preventDefault();

        $(this).parent('.alert').hide(100, function() {
            $(this).remove();
        });
    });



    $(document).ready(function() {
    });

}(window.jQuery));
