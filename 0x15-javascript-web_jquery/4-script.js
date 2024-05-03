// Use the JQuery API to add a click event listener to the div with id 'toggle_header'
$('#toggle_header').click(function() {
    // Use the JQuery API to select the <header> element
    var header = $('header');
    
    // Check if the <header> element has the class 'red'
    if (header.hasClass('red')) {
        // If it does, remove 'red' and add 'green'
        header.removeClass('red').addClass('green');
    } else {
        // If it doesn't, remove 'green' and add 'red'
        header.removeClass('green').addClass('red');
    }
});

