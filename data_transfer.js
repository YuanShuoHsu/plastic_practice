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
