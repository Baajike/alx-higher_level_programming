// Use the JQuery API to add a click event listener to the div with id 'red_header'
$('#red_header').click(function() {
    // Inside the click event handler, update the text color of the <header> element to red
    $('header').css('color', '#FF0000');
});

