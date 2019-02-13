var database;
var email;
var password;
var userId;
var videos = [];
var audio = [];

// On ready document, connect to firebase and log user out
$( document ).ready(function() {
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
  
  database = firebase.database();

  firebase.auth().signOut().then(function() {
    console.log("Sign-out successful.");
  }).catch(function(error) {
    console.log("An error happened.");
  });
});

// Sign user in
$("#sign-in").on("click", function(){

    email = $("#user-email").val();
    password = $("#user-pw").val();
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
$("#new-account").on("click", function(){

    var newEmail = $("#email-input").val();
    var newPassword = $("#confirm-input").val();
    
    console.log(newEmail);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            userId = user.uid;
          // ...
        } else {
          // User is signed out.
          console.log("ERROR!");
        // ...
        }
    });
      
    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
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
    var testData = $("#newData").val(); // Needs to add video
    videos.push(testData);
    console.log(testData);
    console.log("HERE");
    firebase.database().ref('users/' + userId).set({
        videos: videos
    });
});

// Adds audio Data to firebase
$("#addAudio").on("click", function(){
  var testData = $("#newData").val(); // Needs to add video
  audio.push(testData);
  console.log(testData);
  console.log("HERE");
  firebase.database().ref('users/' + userId).set({
      audio: audio
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