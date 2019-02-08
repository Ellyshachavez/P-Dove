
var key = "11482244-d75f6775f0b5a86ee7680f6b7";
var queryInput = "puppies"
var search_query = "&q=" + queryInput;
var queryURL = "https://pixabay.com/api/videos/?key=" + key + search_query;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    var $video = $("<video autoplay loop controls>");
    $video.attr("width", 400);
    $video.attr("height", 480);
    var $source = $("<source>");
    $source.attr("src", response.hits[0].videos.large.url);
    $source.attr("type", "video/mp4");
    $video.append($source);
    console.log(response.hits[0].videos.large.url);
    $("#pixaVid").append($video);
});
