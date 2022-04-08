function addUser(){
    user_name = localStorage.getItem("name")
    pass_name = localStorage.getItem("pass")
if (user_name==document.getElementById("user_name").value){

if(pass_name==document.getElementById("pass_name").value){
    user_name=document.getElementById("user_name").value
    localStorage.setItem("user_name",user_name)
    window.location="kwitter_room.html";
}else{
    wp = "Wrong Password"
}



}else{
    wp = "Wrong Password" 
}




}

function newUser(){
window.location="acoount.html"


}