var audio_C = document.getElementById("white_key_C");
audio_C.addEventListener("mouseover", playAudio_C);
audio_C.addEventListener("mousedown", playAudio_C);
audio_C.addEventListener("touchstart", playAudio_C);
audio_C.addEventListener("mouseout", stopAudio_C);
audio_C.addEventListener("mouseup", stopAudio_C);
audio_C.addEventListener("touchend", stopAudio_C);
var Do_key = document.getElementById("Do");
function playAudio_C(event){
    event.preventDefault();
    audio_C.style.backgroundColor = "#C0241E";
    Do_key.play();
    Do_key.currentTime = 0;
}
function stopAudio_C(event){
    event.preventDefault();
    audio_C.style.backgroundColor = "whitesmoke";
    Do_key.pause();
    Do_key.currentTime = 0;
}

var audio_D = document.getElementById("white_key_D");
audio_D.addEventListener("mouseover", playAudio_D);
audio_D.addEventListener("mousedown", playAudio_D);
audio_D.addEventListener("touchstart", playAudio_D);
audio_D.addEventListener("mouseout", stopAudio_D);
audio_D.addEventListener("mouseup", stopAudio_D);
audio_D.addEventListener("touchend", stopAudio_D);
var Re_key = document.getElementById("Re");
function playAudio_D(event){
    event.preventDefault();
    audio_D.style.backgroundColor = "#C0241E";
    Re_key.play();
    Re_key.currentTime = 0;
}
function stopAudio_D(event){
    event.preventDefault();
    audio_D.style.backgroundColor = "whitesmoke";
    Re_key.pause();
    Re_key.currentTime = 0;  
}

var audio_E = document.getElementById("white_key_E");
audio_E.addEventListener("mouseover", playAudio_E);
audio_E.addEventListener("mousedown", playAudio_E);
audio_E.addEventListener("touchstart", playAudio_E);
audio_E.addEventListener("mouseout", stopAudio_E);
audio_E.addEventListener("mouseup", stopAudio_E);
audio_E.addEventListener("touchend", stopAudio_E);
var Mi_key = document.getElementById("Mi");
function playAudio_E(event){
    event.preventDefault();
    audio_E.style.backgroundColor = "#C0241E";
    Mi_key.play();
    Mi_key.currentTime = 0;
}
function stopAudio_E(event){
    event.preventDefault();
    audio_E.style.backgroundColor = "whitesmoke";
    Mi_key.pause();
    Mi_key.currentTime = 0;
}

var audio_F = document.getElementById("white_key_F");
audio_F.addEventListener("mouseover", playAudio_F);
audio_F.addEventListener("mousedown", playAudio_F);
audio_F.addEventListener("touchstart", playAudio_F);
audio_F.addEventListener("mouseout", stopAudio_F);
audio_F.addEventListener("mouseup", stopAudio_F);
audio_F.addEventListener("touchend", stopAudio_F);
var Fa_key = document.getElementById("Fa");
function playAudio_F(event){
    event.preventDefault();
    audio_F.style.backgroundColor = "#C0241E";
    Fa_key.play();
    Fa_key.currentTime = 0;
}
function stopAudio_F(event){
    event.preventDefault();
    audio_F.style.backgroundColor = "whitesmoke";
    Fa_key.pause();
    Fa_key.currentTime = 0;
}

var audio_G = document.getElementById("white_key_G");
audio_G.addEventListener("mouseover", playAudio_G);
audio_G.addEventListener("mousedown", playAudio_G);
audio_G.addEventListener("touchstart", playAudio_G);
audio_G.addEventListener("mouseout", stopAudio_G);
audio_G.addEventListener("mouseup", stopAudio_G);
audio_G.addEventListener("touchend", stopAudio_G);
var Sol_key = document.getElementById("Sol");
function playAudio_G(event){
    event.preventDefault();
    audio_G.style.backgroundColor = "#C0241E";
    Sol_key.play();
    Sol_key.currentTime = 0;
}
function stopAudio_G(event){
    event.preventDefault();
    audio_G.style.backgroundColor = "whitesmoke";
    Sol_key.pause();
    Sol_key.currentTime = 0;
}

var audio_A = document.getElementById("white_key_A");
audio_A.addEventListener("mouseover", playAudio_A);
audio_A.addEventListener("mousedown", playAudio_A);
audio_A.addEventListener("touchstart", playAudio_A);
audio_A.addEventListener("mouseout", stopAudio_A);
audio_A.addEventListener("mouseup", stopAudio_A);
audio_A.addEventListener("touchend", stopAudio_A);
var La_key = document.getElementById("La");
function playAudio_A(event){
    event.preventDefault();
    audio_A.style.backgroundColor = "#C0241E";
    La_key.play();
    La_key.currentTime = 0;
}
function stopAudio_A(event){
    event.preventDefault();
    audio_A.style.backgroundColor = "whitesmoke";
    La_key.pause();
    La_key.currentTime = 0;
}

var audio_B = document.getElementById("white_key_B");
audio_B.addEventListener("mouseover", playAudio_B);
audio_B.addEventListener("mousedown", playAudio_B);
audio_B.addEventListener("touchstart", playAudio_B);
audio_B.addEventListener("mouseout", stopAudio_B);
audio_B.addEventListener("mouseup", stopAudio_B);
audio_B.addEventListener("touchend", stopAudio_B);
var Ti_key = document.getElementById("Ti");
function playAudio_B(event){
    event.preventDefault();
    audio_B.style.backgroundColor = "#C0241E";
    Ti_key.play();
    Ti_key.currentTime = 0;
}
function stopAudio_B(event){
    event.preventDefault();
    audio_B.style.backgroundColor = "whitesmoke";
    Ti_key.pause();
    Ti_key.currentTime = 0;
}

var audio_Db = document.getElementById("black_key_Db");
audio_Db.addEventListener("mouseover", playAudio_Db);
audio_Db.addEventListener("mousedown", playAudio_Db);
audio_Db.addEventListener("touchstart", playAudio_Db);
audio_Db.addEventListener("mouseout", stopAudio_Db);
audio_Db.addEventListener("mouseup", stopAudio_Db);
audio_Db.addEventListener("touchend", stopAudio_Db);
var Ra_key = document.getElementById("Ra");
function playAudio_Db(event){
    event.preventDefault();
    audio_Db.style.backgroundColor = "#6B0028";
    Ra_key.play();
    Ra_key.currentTime = 0;
}
function stopAudio_Db(event){
    event.preventDefault();
    audio_Db.style.backgroundColor = "black";
    Ra_key.pause();
    Ra_key.currentTime = 0;
}

var audio_Eb = document.getElementById("black_key_Eb");
audio_Eb.addEventListener("mouseover", playAudio_Eb);
audio_Eb.addEventListener("mousedown", playAudio_Eb);
audio_Eb.addEventListener("touchstart", playAudio_Eb);
audio_Eb.addEventListener("mouseout", stopAudio_Eb);
audio_Eb.addEventListener("mouseup", stopAudio_Eb);
audio_Eb.addEventListener("touchend", stopAudio_Eb);
var Me_key = document.getElementById("Me");
function playAudio_Eb(event){
    event.preventDefault();
    audio_Eb.style.backgroundColor = "#6B0028";
    Me_key.play();
    Me_key.currentTime = 0;
}
function stopAudio_Eb(event){
    event.preventDefault();
    audio_Eb.style.backgroundColor = "black";
    Me_key.pause();
    Me_key.currentTime = 0;
}

var audio_Gb = document.getElementById("black_key_Gb");
audio_Gb.addEventListener("mouseover", playAudio_Gb);
audio_Gb.addEventListener("mousedown", playAudio_Gb);
audio_Gb.addEventListener("touchstart", playAudio_Gb);
audio_Gb.addEventListener("mouseout", stopAudio_Gb);
audio_Gb.addEventListener("mouseup", stopAudio_Gb);
audio_Gb.addEventListener("touchend", stopAudio_Gb);
var Se_key = document.getElementById("Se");
function playAudio_Gb(event){
    event.preventDefault();
    audio_Gb.style.backgroundColor = "#6B0028";
    Se_key.play();
    Se_key.currentTime = 0;
}
function stopAudio_Gb(event){
    event.preventDefault();
    audio_Gb.style.backgroundColor = "black";
    Se_key.pause();
    Se_key.currentTime = 0;
}

var audio_Ab = document.getElementById("black_key_Ab");
audio_Ab.addEventListener("mouseover", playAudio_Ab);
audio_Ab.addEventListener("mousedown", playAudio_Ab);
audio_Ab.addEventListener("touchstart", playAudio_Ab);
audio_Ab.addEventListener("mouseout", stopAudio_Ab);
audio_Ab.addEventListener("mouseup", stopAudio_Ab);
audio_Ab.addEventListener("touchend", stopAudio_Ab);
var Le_key = document.getElementById("Le");
function playAudio_Ab(event){
    event.preventDefault();
    audio_Ab.style.backgroundColor = "#6B0028";
    Le_key.play();
    Le_key.currentTime = 0;
}
function stopAudio_Ab(event){
    event.preventDefault();
    audio_Ab.style.backgroundColor = "black";
    Le_key.pause();
    Le_key.currentTime = 0;
}

var audio_Bb = document.getElementById("black_key_Bb");
audio_Bb.addEventListener("mouseover", playAudio_Bb);
audio_Bb.addEventListener("mousedown", playAudio_Bb);
audio_Bb.addEventListener("touchstart", playAudio_Bb);
audio_Bb.addEventListener("mouseout", stopAudio_Bb);
audio_Bb.addEventListener("mouseup", stopAudio_Bb);
audio_Bb.addEventListener("touchend", stopAudio_Bb);
var Te_key = document.getElementById("Te");
function playAudio_Bb(event){
    event.preventDefault();
    audio_Bb.style.backgroundColor = "#6B0028";
    Te_key.play();
    Te_key.currentTime = 0;
}
function stopAudio_Bb(event){
    event.preventDefault();
    audio_Bb.style.backgroundColor = "black";
    Te_key.pause();
    Te_key.currentTime = 0;
}
