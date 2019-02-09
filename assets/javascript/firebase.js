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

$("#sign-in").on("click", function(){

    var email = $("#email-input").val();
    var password = $("#password-input").val();
    console.log(email);

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

    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
        // Handle Errors here.
        console.log("Created User Failed");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
});

