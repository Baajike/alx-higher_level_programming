// Use the JQuery API to add a click event listener to the div with id 'add_item'
$('#add_item').click(function() {
    // Create a new <li> element with the text "Item"
    var newItem = $('<li>').text('Item');
    
    // Append the new <li> element to the <ul> element with class 'my_list'
    $('ul.my_list').append(newItem);
});

