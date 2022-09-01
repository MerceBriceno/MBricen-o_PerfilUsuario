var count_sol = 2;
var reducir_sol = document.querySelector(".sol");
var count_ami = 500;
var aumentar_amigo = document.querySelector(".ami");
function aceptar(clase) { //remover imagen
    var elemento = document.querySelector(clase);
    elemento.remove();
    count_sol--;
    reducir_sol.innerHTML = count_sol;
    count_ami++;
    aumentar_amigo.innerHTML = count_ami+"+";
}
var count_sol = 2;
var reducir_sol = document.querySelector(".sol");
function eliminar(clase) { //remover imagen
    var elemento = document.querySelector(clase);
    elemento.remove();
    count_sol--;
    reducir_sol.innerHTML = count_sol;
}
function edit(){
    var nombre = document.querySelector("#nombre");
    nombre.innerHTML = "Mercedes Briceño"; 
}
// otro cambio

function edit2() {
    var conectar = document.querySelector(".btn");
    conectar.innerHTML = "Sing In";
}

// // tres cosas que hacer:
// 1. Cambiar el nombre del usuario al ingresar info el usurio (lo que hicimos en clase) -> check: function edit
// 2. Al aceptar o rechazar, eliminar la solicitud --> check: function eliminar/aceptar y remove()
// 3. Si acepto -> aumentar el número de amigos
// 4. Si rechazo/acepto -> disminuir el número de amigos