function keyboard_enter_dropdown(event){
    if (event.key == "Enter"){ 
        event.preventDefault();
        document.getElementById("information").innerHTML = document.getElementById("search_text_dropdown").value;
        localStorage.setItem("storage_text", document.getElementById("search_text_dropdown").value);
    }
}

function keyboard_enter_collapse(event){
    if (event.key == "Enter"){ 
        event.preventDefault();
        document.getElementById("search_button").click();
    }
}

function search_data(){
    document.getElementById("information").innerHTML = document.getElementById("search_text_collapse").value;
    localStorage.setItem("storage_text", document.getElementById("search_text_collapse").value);
}

function load_local_storage(){
    document.getElementById("information").innerHTML = localStorage.getItem("storage_text");
}


function playAudio_C(){
    var Do_key=document.getElementById("Do");
    Do_key.play();
}
function playStop_C(){
    var Do_key=document.getElementById("Do");
    Do_key.pause();
    Do_key.currentTime=0;
}

function playAudio_D(){
    var Re_key=document.getElementById("Re");
    Re_key.play();
}
function playStop_D(){
    var Re_key=document.getElementById("Re");
    Re_key.pause();
    Re_key.currentTime=0;
}

function playAudio_E(){
    var Mi_key=document.getElementById("Mi");
    Mi_key.play();
}
function playStop_E(){
    var Mi_key=document.getElementById("Mi");
    Mi_key.pause();
    Mi_key.currentTime=0;
}

function playAudio_F(){
    var Fa_key=document.getElementById("Fa");
    Fa_key.play();
}
function playStop_F(){
    var Fa_key=document.getElementById("Fa");
    Fa_key.pause();
    Fa_key.currentTime=0;
}

function playAudio_G(){
    var Sol_key=document.getElementById("Sol");
    Sol_key.play();
}
function playStop_G(){
    var Sol_key=document.getElementById("Sol");
    Sol_key.pause();
    Sol_key.currentTime=0;
}

function playAudio_A(){
    var La_key=document.getElementById("La");
    La_key.play();
}
function playStop_A(){
    var La_key=document.getElementById("La");
    La_key.pause();
    La_key.currentTime=0;
}

function playAudio_B(){
    var Ti_key=document.getElementById("Ti");
    Ti_key.play();
}
function playStop_B(){
    var Ti_key=document.getElementById("Ti");
    Ti_key.pause();
    Ti_key.currentTime=0;
}

function playAudio_Db(){
    var Ra_key=document.getElementById("Ra");
    Ra_key.play();
}
function playStop_Db(){
    var Ra_key=document.getElementById("Ra");
    Ra_key.pause();
    Ra_key.currentTime=0;
}

function playAudio_Eb(){
    var Me_key=document.getElementById("Me");
    Me_key.play();
}
function playStop_Eb(){
    var Me_key=document.getElementById("Me");
    Me_key.pause();
    Me_key.currentTime=0;
}

function playAudio_Gb(){
    var Se_key=document.getElementById("Se");
    Se_key.play();
}
function playStop_Gb(){
    var Se_key=document.getElementById("Se");
    Se_key.pause();
    Se_key.currentTime=0;
}

function playAudio_Ab(){
    var Le_key=document.getElementById("Le");
    Le_key.play();
}
function playStop_Ab(){
    var Le_key=document.getElementById("Le");
    Le_key.pause();
    Le_key.currentTime=0;
}

function playAudio_Bb(){
    var Te_key=document.getElementById("Te");
    Te_key.play();
}
function playStop_Bb(){
    var Te_key=document.getElementById("Te");
    Te_key.pause();
    Te_key.currentTime=0;
}
