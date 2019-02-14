var email ="";
var password="";
var userId="";
var videos = [];
var audio = [];
// On ready document, connect to firebase and log user out
$( document ).ready(function() {
  // var database;
  console.log( "ready!" );
  // Initialize Firebase
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
  
      email = $("#email-input").val();
      password = $("#pw-input").val();
      console.log(email);
  
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
              email = user.email;
              userId = user.uid;
            // ...
          } else {
            // User is signed out.
            console.log("ERROR!");
          // ...
          }
      });
        
  
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          console.log("Sign In Failed");
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
      });
  });
  
  
  // Create a new Account
  $("#register").on("click", function(){
      email = $("#email-input").val() + "";
      password = $("#pw-input").val() + "";
      
      // console.log(newEmail);
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            email = user.email;
            userId = user.uid;
          // ...
        } else {
          // User is signed out.
          console.log("ERROR!");
        // ...
        }
      });

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        console.log("Created User Failed");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });  
  });
  
  // Populate user videos
  $("#populate").on("click", function(){
      firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
          console.log(snapshot.val());
          $("#data-box").text(snapshot.val().videos);
      });
  });
  
  // Populate user audio
  $("#populate").on("click", function(){
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        console.log(snapshot.val());
        $("#data-box").text(snapshot.val().audio);
    });
  });
  
  // Adds video Data to firebase
  $("#addVideo").on("click", function(){
      var videoData = $("#newData").val(); // Needs to add video 
      // We want this to save the data we want from the video api
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          userId = user.uid;
          // ...
        } else {
          // User is signed out.
          console.log("ERROR!");
          console.log(user);
          // ...
        }
      });
      videos.push(testData);
      console.log(testData);
      console.log("HERE");
      firebase.database().ref('users/' + userId).set({
          videos: videos
      });
      
  });
  
  // Adds audio Data to firebase
  $("#addAudio").on("click", function(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        userId = user.uid;
        // ...
      } else {
        // User is signed out.
        console.log("ERROR!");
        console.log(user);
        // ...
      }
    });
    var audioData = {
      url: $(this).attr("url"),
      image: $(this).attr("img"),
      name: $(this).attr("name")
    } // Needs to add video
    
    audio.push(audioData);
    console.log(audioData);
    console.log("HERE");
    writeUserData(userId, audio);
    console.log(audio + "   1");
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

function writeUserData(userId, audio) {
  console.log(audio + "   2");
  firebase.database().ref('users/' + userId).set({
    audio: audio
    //some more user data
  });
}

function testAudio(){
  var audio = [];
  var audioData = {
    // url: $(this).attr("url"),
    // image: $(this).attr("img"),
    // name: $(this).attr("name")
    url: 3,
    image: 2,
    name: 1 
  }
  
  audio.push(audioData);
  console.log("HERE");
  console.log(audioData);
  writeUserData(userId, audio);
  console.log(audio[0] + "   1");
}

