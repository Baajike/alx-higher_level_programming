// Use the JQuery API to make a GET request to the SWAPI films URL
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    // Once the request is successful, loop through the films data
    $.each(data.results, function(index, film) {
        // For each film, extract the title
        var title = film.title;
        
        // Create a new list item element with the title and append it to the <ul> element with id 'list_movies'
        $('#list_movies').append('<li>' + title + '</li>');
    });
});

