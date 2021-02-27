function keyboard_enter_dropdown(event){
    if (event.key == "Enter"){ 
        if (typeof(Storage) !== "undefined"){
            // Store
            localStorage.setItem("storage_text", document.getElementById("search_text_dropdown").value);
            // Retrieve
            document.getElementById("information").innerHTML = localStorage.getItem("storage_text");
        }
        else{
            document.getElementById("information").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
        // event.preventDefault();
        // document.getElementById("information").innerHTML = document.getElementById("search_text_dropdown").value;
    }
}

function keyboard_enter_collapse(event){
    if (event.key == "Enter"){ 
        event.preventDefault();
        document.getElementById("search_button").click();
    }
}

function search_data(){
    if (typeof(Storage) !== "undefined"){
        // Store
        localStorage.setItem("storage_text", document.getElementById("search_text_collapse").value);
        // Retrieve
        document.getElementById("information").innerHTML = localStorage.getItem("storage_text");
    }
    else{
        document.getElementById("information").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    // document.getElementById("information").innerHTML = document.getElementById("search_text_collapse").value;

}
