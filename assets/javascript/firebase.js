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

var email;
var password;
var userId;
var videos = [];

$("#sign-in").on("click", function(){

    email = $("#email-input").val();
    password = $("#password-input").val();
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

$("#new-account").on("click", function(){

    var newEmail = $("#new-email").val();
    var newPassword = $("#new-password").val();
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

$("#populate").on("click", function(){
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        console.log(snapshot.val());
        $("#data-box").text(snapshot.val().videos);
    });
});

$("#addData").on("click", function(){
    var testData = $("#newData").val();
    videos.push(testData);
    console.log(testData);
    console.log("HERE");
    firebase.database().ref('users/' + userId).set({
        videos: videos
    });
});
