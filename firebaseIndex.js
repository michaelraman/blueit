var config = {
// Your web app's Firebase configuration
    apiKey: "AIzaSyDQ7FMpVsxFPQrIVAb-pR4Fq7AEEWqNUag",
    authDomain: "redditforum-9aaad.firebaseapp.com",
    databaseURL: "https://redditforum-9aaad.firebaseio.com",
    projectId: "redditforum-9aaad",
    storageBucket: "redditforum-9aaad.appspot.com",
    messagingSenderId: "889538924197",
    appId: "1:889538924197:web:1734e4b342b7967cd4c74c",
    measurementId: "G-NE9BL2EC80"
};
// Initialize Firebase
firebase.initializeApp(config)
var database = firebase.database();

firebase.auth.Auth.Persistance.LOCAL;


$("#btn-login").click(function()
{
    var email = $("#email").val()
    var password = $("#password").val()

    if(email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email , password);
        result.catch(function(error){
            var errorCode = error.code();
            var errorMessage = error.message;

            console.log(errorCode);
            window.alert("Message: " + errorMessage);
        })


    }
    else{
        window.alert("Form is incomplete. Please complete all required fields.")
    }
});

