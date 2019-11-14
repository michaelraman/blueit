var config = {
    apiKey: "AIzaSyDQ7FMpVsxFPQrIVAb-pR4Fq7AEEWqNUag",
    authDomain: "redditforum-9aaad.firebaseapp.com",
    databaseURL: "https://redditforum-9aaad.firebaseio.com",
    projectId: "redditforum-9aaad",
    storageBucket: "redditforum-9aaad.appspot.com",
    messagingSenderId: "889538924197",
    appId: "1:889538924197:web:1734e4b342b7967cd4c74c",
    measurementId: "G-NE9BL2EC80"
};
window.onload = function() {
  getTopics();
}
// Initialize Firebase
firebase.initializeApp(config);
var db = firebase.database();
function addTopic(topic) {
  db.ref('/Topics/' + topic).set({
    Content: topic,
  });
}
var data;
function getTopics() {
  db.ref('/Topics/').once('value', function(x) {
    data = x.val();
    window.setTimeout(addToList,1000);
  });
}

function addToList() {
  console.log(data);
  for(var i in data) {
    console.log(i);
    if(i !== 'Content') {
      createItem(i);
    }
  }
}
