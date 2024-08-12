let textoParaProcesar = document.getElementById("encriptador");

const cambiosEncriptador = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}; 

function encriptarTexto() {
    let textoInicial = textoParaProcesar.value;
    let textoFinal = "";

    for (let i = 0; i < textoInicial.length; i++) {
        let letra = textoInicial[i];
        // si existe la llave en el objeto
        if (cambiosEncriptador[letra]) {
            // agregar el cambio por la vocal correspondiente
            textoFinal += cambiosEncriptador[letra];
        } else {
            // si no es una vocal, agreagar la letra sin cambios
            textoFinal += textoInicial[i];
        }
    }

    mostrarResultado(textoFinal);
}

function desencriptarTexto() {
    let textoInicial = textoParaProcesar.value;
    let textoFinal = "";
    let indice = 0;

    while (indice < textoInicial.length) {
        let letra = textoInicial[indice];
        // si es una vocal
        if (cambiosEncriptador[letra]) {
            // avanzo el largo que tomaba la encriptacion, el largo de la llave
            indice += cambiosEncriptador[letra].length 
        } else {
            indice++;
        };
        textoFinal += letra;
    };

    mostrarResultado(textoFinal);
};

function mostrarResultado(textoFinal) {
    // imagen a esconder
    let imagen = document.querySelector('.container_resultado_imagen');
    // div contiene el h2 y p de informacion
    let textoInformativo = document.querySelector(".container__resultado__texto");
    let containerResultado = document.querySelector(".container__resultado");
    let resultadoTexto = document.getElementById("resultado_encriptado");
    let botonCopiar = document.getElementById("copiar");
    
    // Ocultar elementos si no tienen la clase "oculto"
    textoInformativo.classList.toggle("oculto", true);
    imagen.classList.toggle("oculto", true);
    // mostrar boton para copiar y p para agregar texto
    botonCopiar.classList.toggle("oculto", false);
    resultadoTexto.classList.toggle("oculto", false);

    containerResultado.style.justifyContent = "space-between";
    // agregar texto 
    resultadoTexto.innerText = textoFinal;
};

function copiarTexto() {
    let texto = document.getElementById("resultado_encriptado").innerText;
    navigator.clipboard.writeText(texto);
};

