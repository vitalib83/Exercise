
document.querySelector("#checkbox").addEventListener("click", function (e) {
    e.preventDefault();
    var p = document.createElement("p");
    p.innerText = "sorry this checkbox cannot be checked";          
    document.body.appendChild(p)

    });

  
       