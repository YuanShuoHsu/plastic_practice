var textArea = document.createElement("textarea");
$("ul#information_list_0").on("mouseup","li",copyfunction_0);
$("ul#information_list_0").on("touchend","li",copyfunction_0);
function copyfunction_0(event){
    event.preventDefault();
    if($(this).index() == 0){
        textArea.value = "0981-140-688";
    }
    else if($(this).index() == 1){
        textArea.value = "ook1725";
    }
    else if($(this).index() == 2){
        textArea.value = "桃園市大園區南港里7鄰大觀路860號";
    }
    else if($(this).index() == 3){
        textArea.value = "台北市松山區民生東路四段80巷1弄11號2樓";
    }
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    $(this).find('span').css("opacity",1);
    $(this).find('span').text("Copied");
    $(this).find('span').animate({opacity:'0'},"slow");
}

$("ul#information_list_1").on("mouseup","li",copyfunction_1);
$("ul#information_list_1").on("touchend","li",copyfunction_1);
function copyfunction_1(event){
    event.preventDefault();
    if($(this).index() == 0){
        textArea.value = "(03)386-5548";
    }
    else if($(this).index() == 1){
        textArea.value = "ook1725@gmail.com";
    }
    else if($(this).index() == 2){
        textArea.value = "普通重型機車駕照、普通小型車駕照";
    }
    else if($(this).index() == 3){
        textArea.value = "普通重型機車";
    }
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    $(this).find('span').css("opacity",1);
    $(this).find('span').text("Copied");
    $(this).find('span').animate({opacity:'0'}, "slow");
    // if ($(window).width() <= 575) {
    //     $(this).find('a').css("margin-left","49px");
    // }    
}