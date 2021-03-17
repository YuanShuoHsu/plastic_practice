function update(){
    var localDate=new Date().toLocaleDateString();
    var localTime=new Date().toLocaleTimeString();
    var element=(
        <span className="time_size"> {localDate} {localTime}.</span>
    )
    ReactDOM.render(
        element,
        document.getElementById('local_time')
    );
}
setInterval(function(){
    update()
},1000);
