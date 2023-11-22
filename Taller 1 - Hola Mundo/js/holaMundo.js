var Nombres=prompt("Ingresa tu nombre");

var nacimiento=parseInt(prompt("Ingrese su fecha de nacimiento"));

const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento;

if (edad >= 18){
    document.write(`Bienvenido ${Nombres}, su edad es ${edad} años, eres mayor de edad`);
} else {
    document.write(`Bienvenido ${Nombres}, su edad es ${edad} años, eres menor de edad`);
}