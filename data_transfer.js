function keyboard_enter(event){
    if (event.key == "Enter"){ 
        event.preventDefault();
        document.getElementById("search_button").click();
    }
}

function search_data(){
    document.getElementById("information").innerHTML = document.getElementById("search_text").value;
}