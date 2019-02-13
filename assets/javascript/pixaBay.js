
$(document).ready(function() {
   
    $("#search-it").on("click", (event)=>{
        event.preventDefault();
        // var searchQuery = $("#search-me").val()
        var key = "11482244-d75f6775f0b5a86ee7680f6b7";
        var queryInput = $("#search-me").val()
        var search_query = "&q=" + queryInput;
        var queryURL = "https://pixabay.com/api/videos/?key=" + key + search_query;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            for(var i = 0; i < 6; i++){
                var $video = $("<video autoplay loop controls>");
                $video.attr("width", 300);
                $video.attr("height", 180);

                var $source = $("<source>");
                $source.attr("src", response.hits[i].videos.large.url);
                $source.attr("type", "video/mp4");
                $video.append($source);

                console.log(response.hits[i].videos.large.url);
                $("#pixaVid").append($video);
            }
        });
    });
});
