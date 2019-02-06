
var key = "11482244-d75f6775f0b5a86ee7680f6b7";
var search_query = "&q=" + "dog";
var queryURL = "https://pixabay.com/api/videos/?key=" + key + search_query;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});