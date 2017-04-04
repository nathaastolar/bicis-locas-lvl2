## Loc@s por las bicis
1. Descarga los archivos en la sección de Descarga, descomprime y colócalos en tu carpeta llamada **bicis-locas**   
2. En la consola posiciónate en la carpeta **bicis-locas** e inicializa un repositorio en dicha carpeta
3. Crea un repositorio que se llame **bicis-locas** en GITHUB, haz tu primer commit y sube los archivos al repositorio.
4. Abre el archivo **js/main.js** y completa la función **validateForm**, se deben hacer las siguientes validaciones en los campos:
⋅⋅* Todos los campos son obligatorios, excepto los dos últimos.
..* Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
..* Para los campos nombre y apellido la primera letra debe ser mayúscula
..* Validar que el campo email tenga un formato válido. Ej: name@domain.com
..* El campo password debe tener al menos 6 caracteres
..* El campo password no puede ser igual a "password" ó "123456" ó "098754"
..* El valor seleccionado de bicis, debe ser una de las opciones presentadas
4. Si algún campo presenta error debe informarse al usuario por medio de un alert.

var nombre = document.getElementById("name");
var apellido = document.getElementById("lastname");
var email = document.getElementById("input-email");
var contrasena = document.getElementById("input-password");
var twitter = document.getElementById("input-social");
var seleccion = document.getElementById("seleccionado");


var soloLetras = function(e){
  var codigoTecla = e.keyCode;
  if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32){
    return true;
  }else{
    return false;
  }
}
nombre.onkeypress=soloLetras;
apellido.onkeypress=soloLetras;

if (contrasena.value.length <= 5){
  alert("La contraseña debe tener 6 caracteres");
}

if (contrasena.value == "password" || contrasena.value == "123456" || contrasena.value == "0987654"){
  alert("La contraseña no puede ser esa");
}
}


function ocultar()
