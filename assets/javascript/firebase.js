var email ="";
var password="";
var userId="";
var videos = [];
var audio = [];

// On ready document, connect to firebase and log user out
$( document ).ready(function() {
  console.log( "ready!" );
  var config = {
      apiKey: "AIzaSyDKZHJUC4t7iMUQyOer4trD2cP_Ib-L33k",
      authDomain: "better-vibe.firebaseapp.com",
      databaseURL: "https://better-vibe.firebaseio.com",
      projectId: "better-vibe",
      storageBucket: "better-vibe.appspot.com",
      messagingSenderId: "159333884702"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  // Sign user in
  $("#user").on("click", function(){
    userName = $("#confirm-input").val();
      email = $("#email-input").val();
      password = $("#pw-input").val();
      console.log(email + " is Logged In.");
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            sessionStorage.setItem('userId', user.uid);
              email = user.email;
              userId = user.uid;
              $("#sticky").text(userName);
          } else {
            // User is signed out.
            console.log("ERROR!");
          }
      });
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          console.log("Sign In Failed");
          var errorCode = error.code;
          var errorMessage = error.message;        
      });
  });
  
  // Create a new Account
  $("#register").on("click", function(){
    userName = $("#confirm-input").val();
      email = $("#email-input").val() + "";
      password = $("#pw-input").val() + "";
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            email = user.email;
            userId = user.uid;
            $("#sticky").text(userName);

        } else {
          // User is signed out.
          console.log("ERROR!");
        }
      });
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        console.log("Created User Failed");
        var errorCode = error.code;
        var errorMessage = error.message;
      });  
  });
  
  // Populate user audio
  $("#populateAudio").on("click", function(){
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        for(var i = 0; i < snapshot.val().audio.length; i++){
          var item = $('<div class="card" style="width: 30rem; float:left">');

          var newSong = $("<audio controls>")
          newSong.append($("<source>").attr("src", snapshot.val().audio[i].url));
          var songReady = $("<div>").addClass("middle aligned content")
          songReady.append(newSong);

          var favorites = $("<button id='addAudio'>") //onClick='testAudio()'
          favorites.addClass("favbutton")
          favorites.text("Add.")
          favorites.attr("url", snapshot.val().audio[i].url)
          favorites.attr("img", snapshot.val().audio[i].img)
          favorites.attr("name", snapshot.val().audio[i].name)

          var newPic = $("<img>").attr("src", snapshot.val().audio[i].img);
          var imgReady = $("<div>").addClass("ui tiny image")
          imgReady.append(newPic);

          var texT = $("<h3>").text(snapshot.val().audio[i].name)
          var textBox = $("<div>").addClass("ui black message")
          textBox.append(texT);

          item.append(imgReady);
          item.append(songReady);
          item.append(favorites);
          item.append(textBox);

          $(".favorites").prepend(item);
        }
    });
  });

  // Populate user video
  $("#populateVideo").on("click", function(){
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        for(var i = 0; i < snapshot.val().videos; i++){
          var $video = $("<video controls>");
          $video.attr("width", 300);
          $video.attr("height", 180);

          var card = $('<div class="card" style="width: 20rem; float:left">');
          var $source = $("<source>");
          $source.attr("src", snapshot.val().videos[i]);
          $source.attr("type", "video/mp4");
          $video.append($source);
          var div = card.append($video)

          var favorite = $("<button id='addVideo'>");
          favorite.addClass("favVideo");
          favorite.text("Add.");
          favorite.attr("url", snapshot.val().videos[i]);
          div.append(favorite);
          $("#pixaVid").append(div);
        }
    });
  });

  // Logs user out of firebase
  $("#signOut").on("click", function(){
    firebase.auth().signOut().then(function() {
      console.log("Sign-out successful.");
    }).catch(function(error) {
      console.log("An error happened.");
    });
  });
});

// Writes User Data for videos into firebase
function writeUserDataVideos(userId, videos) {
  var audio= [];
  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    console.log(snapshot.val());
    audio = snapshot.val().audio;
  });
  console.log(userId);
  firebase.database().ref('users/' + userId).set({
    videos: videos,
    audio: audio,
    userId: userId
  });
}

// Writes User Data for videos into firebase
function writeUserDataAudio(userId, audio) {
  var videos = [];
  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    console.log(snapshot.val());
    videos = snapshot.val().videos;
  });
  console.log(userId);
  firebase.database().ref('users/' + userId).set({
    videos: videos,
    audio: audio,
    userId: userId
  });
}