$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
    $('button').click(function() {
        $('.pink, .red').fadeTo('slow', 0);
    });

    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
    });
    $h1 = $("<h1>Hello</h1>");
});
