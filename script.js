$(document).ready(function() {
    $('body').append("<p>I'm a paragraph!</p>");
    $('#one').after('<p>I am a p tag!</p>');    // <p></p> goes after div id one.
    if (1+1 == 2) {
      $('#two').after('<p>cool</p>')
    };

});
