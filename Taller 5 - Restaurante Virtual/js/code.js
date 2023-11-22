// Definimos una función llamada "calcularPrecio" que se ejecutará cuando se haga clic en el botón
function calcularPrecio() {
    // Obtenemos los valores seleccionados en los campos de tipo de plato y bebida
    var precioPlato = parseInt(document.getElementById("selectPlato").value); // Precio del plato seleccionado
    var cantidadPlato = parseInt(document.getElementById("t1").value); // Cantidad de platos
    var precioBebida = parseInt(document.getElementById("selectBebida").value); // Precio de la bebida seleccionada
    var cantidadBebida = parseInt(document.getElementById("t2").value); // Cantidad de bebidas

    // Calculamos el precio total del plato y de la bebida
    var totalPlato = precioPlato * cantidadPlato;
    var totalBebida = precioBebida * cantidadBebida;

    // Calculamos el precio total sumando el precio del plato y el de la bebida
    var precioTotal = totalPlato + totalBebida;

    // Obtenemos el elemento HTML con el ID "pedidoCalculado"
    var pedidoCalculado = document.getElementById("pedidoCalculado");

    pedidoCalculado.style.display = "block"; // Mostramos el elemento
    pedidoCalculado.innerHTML = `El precio <strong>total</strong> de su pedido es: $${precioTotal}`; 
    // Mostramos el resultado
}
