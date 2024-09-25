// Función para mostrar las opciones de respuesta
function verRespuestas(adivinanzaNum) {
    const respuestasDiv = document.getElementById(`respuestas${adivinanzaNum}`);
    if (respuestasDiv.style.display === "none") {
        respuestasDiv.style.display = "block";
    } else {
        respuestasDiv.style.display = "none";
    }
}

// Función para evaluar la respuesta seleccionada
function evaluarRespuesta(adivinanzaNum, respuesta) {
    let resultadoText = "";
    let esCorrecta = false;

    // Verificar la respuesta correcta según la adivinanza
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

    // Mensaje de resultado
    if (esCorrecta) {
        resultadoText = "¡Correcto! 🎉";
    } else {
        resultadoText = "Incorrecto. 😢 Inténtalo de nuevo.";
    }

    // Mostrar el resultado
    const resultadoElemento = document.getElementById(`resultado${adivinanzaNum}`);
    resultadoElemento.textContent = resultadoText;
}
