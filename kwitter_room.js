
var firebaseConfig = {
      apiKey: "AIzaSyCgE_YRSOMrM6iSHfKBpMGQ6gXDk-Hb8Sc",
      authDomain: "c48project-2daee.firebaseapp.com",
      databaseURL: "https://c48project-2daee-default-rtdb.firebaseio.com",
      projectId: "c48project-2daee",
      storageBucket: "c48project-2daee.appspot.com",
      messagingSenderId: "957748781387",
      appId: "1:957748781387:web:9a2a70907ed464fc4248ce",
      measurementId: "G-ELJWSM4E49"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="WELCOME "+ user_name +"!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}