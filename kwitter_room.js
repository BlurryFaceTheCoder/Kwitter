
var firebaseConfig = 
{

      apiKey: "AIzaSyC2d7XjStU51bAKBv_poAsNr7aVUGVOyHE",
    
      authDomain: "kwitter-e1864.firebaseapp.com",
    
      databaseURL: "https://kwitter-e1864-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-e1864",
    
      storageBucket: "kwitter-e1864.appspot.com",
    
      messagingSenderId: "1026415845695",
    
      appId: "1:1026415845695:web:1583a25f8459a1d751338a"
    
};
firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem(user_name);
 room_name = localStorage.getItem(room_name);   

 function logout()
 {
      window.location = "index.html";
 }

 function addRoom()
 {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name)

       window.location = "kwitter_page.html"
 }
 function redirectToRoomName(name)
 {
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on
('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;


       Room_names = childKey;
      //start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)' >~"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}

getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

