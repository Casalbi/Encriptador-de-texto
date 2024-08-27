


function encriptar(){
    let textoUsuario = document.getElementById("textousuario").value;
    let tituloNoMensaje = document.getElementById("no-mensaje");
    let parrafo = document.getElementById ("no-mensaje-parrafo");
    let muñeco = document.getElementById("Muñeco");
    let textoEncriptado = textoUsuario
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi,"ufat");

    if(textoUsuario.length !=0) {
        document.getElementById("textousuario").value = textoEncriptado;
        tituloNoMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./Imágenes/Encriptadoéxito.png";
    } else {
        tituloNoMensaje.textContent= "Ningún mensaje fue encontrado."
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar."
        muñeco.src ="./Imágenes/Muñeco.png";
        swal("Oops!", "Debes ingresar un texto", "warning");
        
    }
}

function desencriptar() {
    let textoUsuario = document.getElementById("textousuario").value;
    let tituloNoMensaje = document.getElementById("no-mensaje");
    let parrafo = document.getElementById ("no-mensaje-parrafo");
    let muñeco = document.getElementById("Muñeco");

    let textoEncriptado = textoUsuario
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(textoUsuario.length !=0) {
        document.getElementById("textousuario").value = textoEncriptado;
        tituloNoMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./Imágenes/desencriptado.png";
    } else{
        tituloNoMensaje.textContent= "Ningún mensaje fue encontrado."
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar."
        muñeco.src ="./Imágenes/Muñeco.png";
        swal("Oops!", "Debes ingresar un texto", "warning");
    }

}