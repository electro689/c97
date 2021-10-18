// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAzJDyXaGussYrh3M1QPSjDw87JpL6lHwY",
      authDomain: "class-tests-b8eb6.firebaseapp.com",
      databaseURL: "https://class-tests-b8eb6-default-rtdb.firebaseio.com",
      projectId: "class-tests-b8eb6",
      storageBucket: "class-tests-b8eb6.appspot.com",
      messagingSenderId: "916927384860",
      appId: "1:916927384860:web:9eed42b0d0f081c74a7ed9"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" +Room_names);
      row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }


function logout() { 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name");
       window.location = "index.html";
 }
