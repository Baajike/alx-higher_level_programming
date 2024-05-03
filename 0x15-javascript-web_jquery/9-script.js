$(document).ready(function() {
    // Use the JQuery API to make a GET request to the specified URL
    $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
        // Once the request is successful, extract the translation of "hello" from the response data
        var helloTranslation = data.hello;
        
        // Use the JQuery API to select the <div> element with id 'hello' and update its text with the translation
        $('#hello').text(helloTranslation);
    });
});

