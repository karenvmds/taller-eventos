window.addEventListener("load", function() {
    const elementoDiv = document.querySelector("div");
    
    elementoDiv.addEventListener("click", function() {
            alert("Hola! Soy el div");
    })
});


function alerta() {
    event.stopPropagation()
    alert("Hola!");
}
