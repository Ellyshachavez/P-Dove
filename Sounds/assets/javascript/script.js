$(document).ready(function() {


  $("#search-it").on("click", (event)=>{
    event.preventDefault();
    var searchQuery = $("#search-me").val()
    console.log(searchQuery)
    var userKey = "27b3657c"
    var queryURL = "https://api.jamendo.com/v3.0/albums/tracks/?client_id=" + userKey + "&format=jsonpretty&track_name=" + searchQuery  
   
  $.ajax({
      url: queryURL,
      methed: "GET"
  }).then(function(response) {
    console.log(response)
    $(".items").empty();
newArr = [];
//putting the main piece of the object generated from API into a smaller object
  for(var ii=0; ii<10; ii++){
    var tempArr = {
      image: response.results[ii].image,
      name: response.results[ii].name,
      previewURL : response.results[ii].tracks[0].audio,
    }
    newArr.push(tempArr)
};
console.log(newArr)

newArr.forEach((element) => {

var item = $("<div>").addClass("item")

  var newSong = $("<audio controls>")
  newSong.append($("<source>").attr("src", element.previewURL));
  var songReady = $("<div>").addClass("middle aligned content")
  songReady.append(newSong);


  var newPic = $("<img>").attr("src", element.image);
  var imgReady = $("<div>").addClass("ui tiny image")
  imgReady.append(newPic);


  var texT = $("<h3>").text(element.name)
  var textBox = $("<div>").addClass("ui black message")
  textBox.append(texT);

 item.append(imgReady);
 item.append(songReady);
 item.append(textBox);

  $(".items").prepend(item);

      });
    });
  });
});
