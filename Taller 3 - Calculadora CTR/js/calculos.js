
function calculadora(){

    var calculo = parseInt(prompt("¿Que operación deseas realizar? || 1 - Suma, 2 - Resta, 3 - Multiplicación, 4 - División, 5 - Calcular Mayor"))

    switch(calculo) {
        case 1:
            const suma1 = parseFloat(prompt("Ingresa el primer número a operar:"));
            const suma2 = parseFloat(prompt("Ingresa el segundo número a operar:"));
            const SumaTotal = suma1 + suma2;
            alert(`El resultado de la suma es: ${SumaTotal}`);
            break;

        case 2:
            const resta1 = parseFloat(prompt("Ingresa el primer número a operar:"));
            const resta2 = parseFloat(prompt("Ingresa el segundo número a operar:"));
            const restaTotal = resta1 - resta2;
            alert(`El resultado de la resta es: ${restaTotal}`);
            break;
            
        case 3:
            const mul1 = parseFloat(prompt("Ingresa el primer número a operar:"));
            const mul2 = parseFloat(prompt("Ingresa el segundo número a operar:"));
            const mulTotal = mul1 * mul2;
            alert(`El resultado de la multiplicación es: ${mulTotal}`);
            break;
            
        case 4:
            const div1 = parseFloat(prompt("Ingresa el primer número a operar:"));
            const div2 = parseFloat(prompt("Ingresa el segundo número a operar:"));
            const divTotal = div1 / div2;
            alert(`El resultado de la división es: ${divTotal}`);
            break;
            
        case 5:
            const cmy1 = parseFloat(prompt("Ingresa el primer número a operar:"));
            const cmy2 = parseFloat(prompt("Ingresa el segundo número a operar:"));
            if (cmy1 > cmy2) {
                alert(`Es el número mayor: ${cmy1} `);
            } else {
                alert(`Es el número mayor: ${cmy2} `);
            }
            break;   

        default:
            alert("Operación no valida, por favor selecciona 1, 2, 3, 4 o 5");
        break;
    }
}
