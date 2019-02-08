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

var provider = new firebase.auth.GoogleAuthProvider();
