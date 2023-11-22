
// Funcion para sumar dos numeros y mostrar el resultado en el elemento con id "resultado"
function suma(n1, n2) {
    var resultado = n1 + n2;
    var res = document.getElementById("resultado");

    // Validar que ambos numeros no sean cero
    if (n1 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Resultado: ${resultado}`;
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `No valido`;
    }
}

// Funcion para restar dos numeros y mostrar el resultado
function resta(n1, n2) {
    var resultado = n1 - n2;
    var res = document.getElementById("resultado");

    // Validar que ambos numeros no sean cero
    if (n1 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Resultado: ${resultado}`;
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `No valido`;
    }
}

// Funcion para multiplicar dos numeros y mostrar el resultado
function multiplicacion(n1, n2) {
    var resultado = n1 * n2;
    var res = document.getElementById("resultado");

    // Validar que ambos numeros no sean cero
    if (n1 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Resultado: ${resultado}`;
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `No valido`;
    }
}

// Funcion para dividir dos numeros y mostrar el resultado
function division(n1, n2) {
    var resultado = n1 / n2;
    var res = document.getElementById("resultado");

    // Validar que ambos numeros no sean cero
    if (n1 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Resultado: ${resultado}`;
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `No valido`;
    }
}

// Funcion para calcular la potencia de un numero y mostrar el resultado
function potencia(n1) {
    var resultado = n1 * n1;
    var res = document.getElementById("resultado");

    // Validar que el numero no sea cero
    if (n1 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Resultado: ${resultado}`;
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `No valido`;
    }
}

// Funcion principal que obtiene los valores del formulario y realiza la operacion seleccionada
function mostrar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Realizar la operacion segun la opcion seleccionada entre 1 y 5
    switch (opc) {
        case 1:
            suma(n1, n2);
            break;
        case 2:
            resta(n1, n2);
            break;
        case 3:
            multiplicacion(n1, n2);
            break;
        case 4:
            division(n1, n2);
            break;
        case 5:
            potencia(n1);
            break;
        default:
            alert("No valido");
    }
}
