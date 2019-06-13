function Timer(){
        var d = new Date();
        var x = document.getElementById("time");
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        x.innerHTML = h + ":" + m + ":" + s;
      
}
setInterval(Timer, 1000);
