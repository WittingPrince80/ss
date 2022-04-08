var firebaseConfig = {
  apiKey: "AIzaSyCQNwvBYwoBW_mrebKGd9F_shuUgub2_eU",
  authDomain: "arykwitter.firebaseapp.com",
  databaseURL: "https://arykwitter-default-rtdb.firebaseio.com",
  projectId: "arykwitter",
  storageBucket: "arykwitter.appspot.com",
  messagingSenderId: "468257090117",
  appId: "1:468257090117:web:903891ca0bb510d10ad12c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
 //This code will ONLY send the information to database
 user_name = localStorage.getItem("user_name");
  
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
 function addRoom()
 {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
   
     localStorage.setItem("room_name", room_name);
     
     window.location = "kwittermessage.html";
 }

 function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }
 
 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwittermessage.html";
 }
 //------------------------------------------------------------
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 
     window.location = "index.html";
 }

