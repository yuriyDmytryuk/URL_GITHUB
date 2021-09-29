let x = document.getElementById("num1");
let y = document.getElementById("num2");
let boton = document.getElementById("bot1");
let solucion = document.getElementById("solucion");
boton.onclick = function(){
    solucion.innerHTML = +x.value + +y.value;
}

