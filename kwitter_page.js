
var firebaseConfig = {
    apiKey: "AIzaSyAYcHIE_SaXXXKXziJD9HVe-qVHfBFhN_w",
    authDomain: "practice-6d951.firebaseapp.com",
    databaseURL: "https://practice-6d951-default-rtdb.firebaseio.com",
    projectId: "practice-6d951",
    storageBucket: "practice-6d951.appspot.com",
    messagingSenderId: "300994419931",
    appId: "1:300994419931:web:17a3da4bc644c2056200fe"
  };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}












function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
    }

