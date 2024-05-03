// Wait for the DOM content to be fully loaded
$(document).ready(function() {
    // Event listener for adding a new item
    $('#add_item').click(function() {
        // Create a new <li> element
        var newItem = $('<li>').text('Item');
        
        // Append the new <li> element to the <ul> with class 'my_list'
        $('ul.my_list').append(newItem);
    });

    // Event listener for removing the last item
    $('#remove_item').click(function() {
        // Remove the last <li> element from the <ul> with class 'my_list'
        $('ul.my_list li:last-child').remove();
    });

    // Event listener for clearing the list
    $('#clear_list').click(function() {
        // Remove all <li> elements from the <ul> with class 'my_list'
        $('ul.my_list').empty();
    });
});

