// Use the JQuery API to make a GET request to the SWAPI URL
$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
    // Once the request is successful, extract the character name from the response data
    var characterName = data.name;
    
    // Use the JQuery API to select the <div> element with id 'character' and update its text with the character name
    $('#character').text(characterName);
});

