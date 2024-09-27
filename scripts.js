let puntaje = 0; 

function verRespuestas(adivinanzaNum) {
    const respuestasDiv = document.getElementById(`respuestas${adivinanzaNum}`);
    respuestasDiv.style.display = (respuestasDiv.style.display === "none") ? "block" : "none";
}

function evaluarRespuesta(adivinanzaNum, respuesta) {
    let resultadoText = "";
    let esCorrecta = false;

    switch (adivinanzaNum) {
        case 1:
            esCorrecta = (respuesta === 'pelota');
            break;
        case 2:
            esCorrecta = (respuesta === 'peine');
            break;
        case 3:
            esCorrecta = (respuesta === 'nube');
            break;
        case 4:
            esCorrecta = (respuesta === 'pera');
            break;
        case 5:
            esCorrecta = (respuesta === 'reloj');
            break;
        case 6:
            esCorrecta = (respuesta === 'huevo');
            break;
    }

    if (esCorrecta) {
        resultadoText = "¡Correcto! 🎉";
        puntaje++; 
    } else {
        resultadoText = "Incorrecto. 😢 Inténtalo de nuevo.";
    }

    const resultadoElemento = document.getElementById(`resultado${adivinanzaNum}`);
    resultadoElemento.textContent = resultadoText;
    resultadoElemento.style.display = "block"; 

    document.getElementById("puntaje").textContent = `Tu puntaje: ${puntaje}`;

    const respuestasDiv = document.getElementById(`respuestas${adivinanzaNum}`);
    respuestasDiv.style.display = "none";
}
