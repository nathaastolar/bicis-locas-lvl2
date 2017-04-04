var enviar = document.getElementById("registrar");

function validateForm(e){
	/* Escribe tú código aquí */
    var classElement = document.getElementsByClassName("contenido");
    var nombre = document.getElementById("name");
    var apellido = document.getElementById("lastname");
    var email = document.getElementById("input-email");
    var contrasena = document.getElementById("input-password");
    var twitter = document.getElementById("input-social");
    var seleccion = document.getElementById("seleccionado");
    var obligatorio = document.getElementsByClassName("form-control");
    
    if(nombre.value == 0 || nombre.value == ""){
      classElement[0].style.display = "block";
    }
    else {
      classElement[0].style.display = "none";
    }
    if(apellido.value == 0 || apellido.value == ""){
      classElement[1].style.display = "block";
    }
    else {
      classElement[1].style.display = "none";
    }
    if(email.value == 0 || email.value == ""){
      classElement[2].style.display = "block";
    }
    else {
      classElement[2].style.display = "none";
    }
    if(contrasena.value == 0 || contrasena.value == ""){
      classElement[3].style.display = "block";
    }
    else {
      classElement[3].style.display = "none";
    }
    if(seleccion.value == 0 || seleccion.value == ""){
      classElement[4].style.display = "block";
    }
    else {
      classElement[4].style.display = "none";
    }


  }

  enviar.addEventListener("click",ocultar);

/*
Todos los campos son obligatorios, excepto los dos ultimos.
Los campos nombre y apellido solo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula.
Validar que el campo email tenga un formato válido (name@domain.com)
El campo password debe tener al menos 6 caracteres.
El campo password no puede ser igual a "password" o "123456" o "0987654"
El valor seleccionado de bicis, debe ser una de las opciones presentadas.

*/
