var counter = 0;

function stoper() {
    counter++;
    var p = document.createElement("p");
    p.innerHTML = counter;
    document.body.appendChild(p);
}

var n = setInterval(stoper, 1000);
document.getElementById("btn").addEventListener("click", function(e) {
    clearInterval(n);
});