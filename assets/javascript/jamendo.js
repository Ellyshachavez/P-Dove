

//  preset example sounds for users 

var searchExamples = [];
var searchQuery = $(this).attr("FILLL THIS SEARCH ENGINE ID")
var queryURL = "https://api.jamendo.com/v3.0/tracks/?client_id=cc8799ee&format=jsonpretty&limit=10&fuzzytags=" + searchQuery + "=high+veryhigh&include=musicinfo&groupby=artist_id&type=single"


$.ajax({
    url: queryURL,
    methed: "GET"
}).done(function(response) {
    response.data.forEach(function (music) {
        
    })

})