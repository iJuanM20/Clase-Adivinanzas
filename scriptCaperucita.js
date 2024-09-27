function verRespuestasCaperucita(adivinanzaNum) {
    const respuestasDiv = document.getElementById(`respuestasCaperucita${adivinanzaNum}`);
    respuestasDiv.style.display = (respuestasDiv.style.display === "none") ? "block" : "none";
}

function evaluarRespuestaCaperucita(adivinanzaNum, respuesta) {
    let resultadoText = "";
    let esCorrecta = false;

    switch (adivinanzaNum) {
        case 1:
            esCorrecta = (respuesta === 'lobo');
            break;
        case 2:
            esCorrecta = (respuesta === 'abuela');
            break;
        case 3:
            esCorrecta = (respuesta === 'madre');
            break;
        case 4:
            esCorrecta = (respuesta === 'caperucita');
            break;
    }

    if (esCorrecta) {
        resultadoText = "¡Correcto! 🎉";
    } else {
        resultadoText = "Incorrecto. 😢 Inténtalo de nuevo.";
    }

    const resultadoElemento = document.getElementById(`resultadoCaperucita${adivinanzaNum}`);
    resultadoElemento.textContent = resultadoText;
    resultadoElemento.style.display = "block"; 

    const respuestasDiv = document.getElementById(`respuestasCaperucita${adivinanzaNum}`);
    respuestasDiv.style.display = "none"; // Oculta las respuestas después de seleccionar una
}
