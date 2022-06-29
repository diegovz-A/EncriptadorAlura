var resultado  = document.querySelector(".resultadoText");

var a = "ai";
var e = "enter";
var i = "imes";
var o = "ober";
var u = "ufat";

function encriptar(){
    var nuevoTexto = "";
    var texto = document.querySelector(".cryptoText").value;
    texto = texto.toLowerCase();

    for (var index = 0; index < texto.length; index++){

        if (texto[index] == "a"){
            nuevoTexto += "ai";
            
        }
        else if (texto[index] == "e"){
            nuevoTexto += "enter";
            
        }
        else if (texto[index] == "i"){
            nuevoTexto += "imes";
            
        }
        else if (texto[index] == "o"){
            nuevoTexto += "ober";
            
        }
        else if (texto[index] == "u"){
            nuevoTexto += "ufat";
            
        }
        else{
            nuevoTexto += texto[index];
        }
    }
    resultado.value = nuevoTexto;

    
}
function desencriptar(){

    var nuevoTexto = "";
    var texto = document.querySelector(".cryptoText").value;

    for (var index = 0; index < texto.length; index++){

        if (texto[index] == "a"){
            if (texto[index+1] == "i"){
                nuevoTexto += "a";
                index += 1;
            }
            else{
                nuevoTexto += texto[index];
            }
            
        }
        else if (texto[index] == "e"){
            if (texto.substring(index+1,index+5) == "nter"){
                nuevoTexto += "e";
                index += 4;
            }
            else{
                nuevoTexto += texto[index];
            }
            
        }
        else if (texto[index] == "i"){
            var verificador = texto.substring(index+1,index+4);
            if (verificador == "mes"){
                nuevoTexto += "i";
                index += 3;
            }
            else{
                nuevoTexto += texto[index];
            }
            
        }
        
        else if (texto[index] == "o"){
            if (texto.substring(index+1,index+4) == "ber"){
                nuevoTexto += "o";
                index += 3;
            }
            else{
                nuevoTexto += texto[index];
            }
        }
        else if (texto[index] == "u"){
            if (texto.substring(index+1,index+4) == "fat"){
                nuevoTexto += "u";
                index += 3;
            }
            else{
                nuevoTexto += texto[index];
            }
        }
        else{
            nuevoTexto += texto[index];
        }
    }
    document.querySelector(".resultadoText").value = nuevoTexto;
}

function copiarTexto (){
    if (navigator.clipboard){
        navigator.clipboard.writeText(resultado.value)
    }
    else{
        resultado.select();
        document.execCommand('copy');
    }

}



document.querySelector(".btnEncriptador").onclick = encriptar;
document.querySelector(".btnDesencriptador").onclick = desencriptar;
document.querySelector(".btnCopiar").onclick = copiarTexto;