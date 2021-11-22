
//ADD YOUR FIREBASE LINKS HERE
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
  function addRoom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
        });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+" </div> <hr>";
document.getElementById("output").innerHTML+=row;
     
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

 //End code