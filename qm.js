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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
 
 function send(){
msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
  });
document.getElementById("msg").value="";
 }

 





 function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  
      window.location = "index.html";
  }