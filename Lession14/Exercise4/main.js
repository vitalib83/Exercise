function waiting(){
    var p = document.createElement("p");
     p.innerHTML="Thank you for waiting! No one in their right mind would wait for so long for a webpage to load";
     document.body.appendChild(p);

}
    setTimeout(waiting,15000)