let cont = document.getElementById("cont");
let reg = document.getElementById("reg");
let btn1 = document.getElementById("btn1");

function register(){
    if (btn1.innerHTML == "Edit profil") {
        cont.style.display = "none";
        reg.style.display = "flex";
        btn1.innerHTML = "Abort Edit";
    }
    else contss();
}

function contss(){
    cont.style.display = "block";
    reg.style.display = "none";
    btn1.innerHTML = "Edit profil";
}

function nav(){
    let d = document.getElementById("d2");
    if(d.style.display == "flex"){
        d.style.display = "none";
    }else{
        d.style.display = "flex";
    }
}