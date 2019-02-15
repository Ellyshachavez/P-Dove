
$(document).ready(function() {
    $("#search-it").on("click", (event)=>{
        event.preventDefault();
        // var searchQuery = $("#search-me").val()
        var key = "11482244-d75f6775f0b5a86ee7680f6b7";
        var queryInput = $("#search-me").val()
        var search_query = "&q=" + queryInput;
        var queryURL = "https://pixabay.com/api/videos/?key=" + key + search_query;
        $(".video-layout").show();
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            for(var i = 0; i < 8; i++){
                var $video = $("<video controls>");
                $video.attr("width", 300);
                $video.attr("height", 180);

                var card = $('<div class="card-columns">');
                var $source = $("<source>");
                $source.attr("src", response.hits[i].videos.large.url);
                $source.attr("type", "video/mp4");
                $video.append($source);
                var div = card.append($video)

                var favorite = $("<button id='addVideo'>");
                favorite.addClass("favVideo");
                favorite.text("Add.");
                favorite.attr("url", response.hits[i].videos.large.url);
                div.append(favorite);
                $("#pixaVid").append(div);
            }
        });

        // When you click add on the video, it adds the video's url to the firebase
        $(document).on("click", ".favVideo", function() {
            event.preventDefault();
            videos.push($(this).attr("url"));
            console.log(userId);
            userId = sessionStorage.getItem("userId");
            writeUserDataVideos(userId,videos);
        });
    });
});

