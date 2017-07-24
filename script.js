$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
    $('button').click(function() {
        $('.pink, .red').fadeTo('slow', 0);
    });
});
