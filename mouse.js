var audio_C = document.getElementById("white_key_C");
audio_C.addEventListener("touchstart", playAudio_C);
audio_C.addEventListener("touchend", stopAudio_C);
var Do_key = document.getElementById("Do");
function playAudio_C(){
    audio_C.style.backgroundColor = "lightblue";
    Do_key.play();
}
function stopAudio_C(){
    Do_key.pause();
    Do_key.currentTime = 0;
    audio_C.style.backgroundColor = "white";
}

var audio_D = document.getElementById("white_key_D");
audio_D.addEventListener("mousedown", playAudio_D);
audio_D.addEventListener("mouseup", stopAudio_D);
var Re_key = document.getElementById("Re");
function playAudio_D(){
    Re_key.play();
}
function stopAudio_D(){
    Re_key.pause();
    Re_key.currentTime = 0;
}

var audio_E = document.getElementById("white_key_E");
audio_E.addEventListener("mousedown", playAudio_E);
audio_E.addEventListener("mouseup", stopAudio_E);
var Mi_key = document.getElementById("Mi");
function playAudio_E(){
    Mi_key.play();
}
function stopAudio_E(){
    Mi_key.pause();
    Mi_key.currentTime = 0;
}

var audio_F = document.getElementById("white_key_F");
audio_F.addEventListener("mousedown", playAudio_F);
audio_F.addEventListener("mouseup", stopAudio_F);
var Fa_key = document.getElementById("Fa");
function playAudio_F(){
    Fa_key.play();
}
function stopAudio_F(){
    Fa_key.pause();
    Fa_key.currentTime = 0;
}

var audio_G = document.getElementById("white_key_G");
audio_G.addEventListener("mousedown", playAudio_G);
audio_G.addEventListener("mouseup", stopAudio_G);
var Sol_key = document.getElementById("Sol");
function playAudio_G(){
    Sol_key.play();
}
function stopAudio_G(){
    Sol_key.pause();
    Sol_key.currentTime = 0;
}

var audio_A = document.getElementById("white_key_A");
audio_A.addEventListener("mousedown", playAudio_A);
audio_A.addEventListener("mouseup", stopAudio_A);
var La_key = document.getElementById("La");
function playAudio_A(){
    La_key.play();
}
function stopAudio_A(){
    La_key.pause();
    La_key.currentTime = 0;
}

var audio_B = document.getElementById("white_key_B");
audio_B.addEventListener("mousedown", playAudio_B);
audio_B.addEventListener("mouseup", stopAudio_B);
var Ti_key = document.getElementById("Ti");
function playAudio_B(){
    Ti_key.play();
}
function stopAudio_B(){
    Ti_key.pause();
    Ti_key.currentTime = 0;
}

var audio_Db = document.getElementById("black_key_Db");
audio_Db.addEventListener("mousedown", playAudio_Db);
audio_Db.addEventListener("mouseup", stopAudio_Db);
var Ra_key = document.getElementById("Ra");
function playAudio_Db(){
    Ra_key.play();
}
function stopAudio_Db(){
    Ra_key.pause();
    Ra_key.currentTime = 0;
}

var audio_Eb = document.getElementById("black_key_Eb");
audio_Eb.addEventListener("mousedown", playAudio_Eb);
audio_Eb.addEventListener("mouseup", stopAudio_Eb);
var Me_key = document.getElementById("Me");
function playAudio_Eb(){
    Me_key.play();
}
function stopAudio_Eb(){
    Me_key.pause();
    Me_key.currentTime=0;
}

var audio_Gb = document.getElementById("black_key_Gb");
audio_Gb.addEventListener("mousedown", playAudio_Gb);
audio_Gb.addEventListener("mouseup", stopAudio_Gb);
var Se_key = document.getElementById("Se");
function playAudio_Gb(){
    Se_key.play();
}
function stopAudio_Gb(){
    Se_key.pause();
    Se_key.currentTime=0;
}

var audio_Ab = document.getElementById("black_key_Ab");
audio_Ab.addEventListener("mousedown", playAudio_Ab);
audio_Ab.addEventListener("mouseup", stopAudio_Ab);
var Le_key = document.getElementById("Le");
function playAudio_Ab(){
    Le_key.play();
}
function stopAudio_Ab(){
    Le_key.pause();
    Le_key.currentTime=0;
}

var audio_Bb = document.getElementById("black_key_Bb");
audio_Bb.addEventListener("mousedown", playAudio_Bb);
audio_Bb.addEventListener("mouseup", stopAudio_Bb);
var Te_key = document.getElementById("Te");
function playAudio_Bb(){
    Te_key.play();
}
function stopAudio_Bb(){
    Te_key.pause();
    Te_key.currentTime=0;
}