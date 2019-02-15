$(document).ready(function() {

   $("#search-it").on("click", (event)=>{
       event.preventDefault();
       // var searchQuery = $(“#search-me”).val()
       var key = "11482244-d75f6775f0b5a86ee7680f6b7";
       var queryInput = $("#search-me").val()
       var search_query = "&q=" + queryInput;
       var queryURL = "https://pixabay.com/api/?key=" + key + search_query;

       $.ajax({
           url: queryURL,
           method: "GET"
       }).then(function(response){
           for(var i = 0; i < 6; i++){

               var card = $('<div class="card" style="width: 300px;">');
               var $image = $("<img>");
               $image.attr("width", 310);
               $image.attr("height", 180);


               $image.attr("src", response.hits[i].webformatURL)
               console.log(response.hits[i].webformatURL);
               card.append($image);
               $("#pixaImg").append(card);

           }
       });
   });
});