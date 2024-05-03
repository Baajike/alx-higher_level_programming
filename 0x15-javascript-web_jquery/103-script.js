// Wait for the DOM content to be fully loaded
$(document).ready(function() {
    // Function to fetch translation of "Hello" and update the UI
    function fetchTranslation() {
        // Get the language code entered by the user
        var languageCode = $('#language_code').val();

        // Make a GET request to the API service with the language code
        $.get('https://www.fourtonfish.com/hellosalut/hello/', { lang: languageCode }, function(data) {
            // Extract the translation of "Hello" from the response data
            var helloTranslation = data.hello;

            // Display the translation in the <div> element with id 'hello'
            $('#hello').text(helloTranslation);
        });
    }

    // Event listener for the Translate button
    $('#btn_translate').click(fetchTranslation);

    // Event listener for pressing Enter on the language code input field
    $('#language_code').keypress(function(event) {
        if (event.which == 13) {
            fetchTranslation();
        }
    });
});

