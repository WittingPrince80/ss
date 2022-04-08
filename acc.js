function nextstep(){
    nu_name=document.getElementById("nu_name").value;
    np_name=document.getElementById("np_name").value;
    localStorage.setItem("name",nu_name);
    localStorage.setItem("pass",np_name);
    window.location="kwitter_room.html";
}