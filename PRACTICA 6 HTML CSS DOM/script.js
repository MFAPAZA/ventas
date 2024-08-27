// Precios de los productos
const precios = {
    aqua: 200,
    emocion: 180,
    alegria: 160,
    frescura: 150
};

// Función para calcular las ventas y determinar el empleado del mes
function calcularVentas() {
    // Capturamos las cantidades vendidas por cada vendedor
    const ventasJuana = {
        aqua: parseInt(document.getElementById('aqua').value) || 0,
        emocion: parseInt(document.getElementById('emocion').value) || 0,
        alegria: parseInt(document.getElementById('alegria').value) || 0,
        frescura: parseInt(document.getElementById('frescura').value) || 0
    };
    const ventasPedro = {
        aqua: parseInt(document.getElementById('aquaPedro').value) || 0,
        emocion: parseInt(document.getElementById('emocionPedro').value) || 0,
        alegria: parseInt(document.getElementById('alegriaPedro').value) || 0,
        frescura: parseInt(document.getElementById('frescuraPedro').value) || 0
    };

    // Validación para asegurarse de que se ingresen valores numéricos
    if (isNaN(ventasJuana.aqua) || isNaN(ventasPedro.aqua) ||
        isNaN(ventasJuana.emocion) || isNaN(ventasPedro.emocion) ||
        isNaN(ventasJuana.alegria) || isNaN(ventasPedro.alegria) ||
        isNaN(ventasJuana.frescura) || isNaN(ventasPedro.frescura)) {
        document.getElementById('resultados').innerHTML = "<p style='color:red;'>Por favor ingrese valores numéricos válidos.</p>";
        return;
    }

    // Calculamos las ventas totales de cada vendedor
    const totalJuana = (ventasJuana.aqua * precios.aqua) +
        (ventasJuana.emocion * precios.emocion) +
        (ventasJuana.alegria * precios.alegria) +
        (ventasJuana.frescura * precios.frescura);

    const totalPedro = (ventasPedro.aqua * precios.aqua) +
        (ventasPedro.emocion * precios.emocion) +
        (ventasPedro.alegria * precios.alegria) +
        (ventasPedro.frescura * precios.frescura);

    // Mostramos los resultados en la página web
    let resultadosHTML = `<h3>Resultados de Ventas</h3>`;
    resultadosHTML += `<p>Ventas de Juana: Aqua - ${ventasJuana.aqua}, Emoción - ${ventasJuana.emocion}, Alegría - ${ventasJuana.alegria}, Frescura - ${ventasJuana.frescura}</p>`;
    resultadosHTML += `<p>Total dinero recolectado por Juana: $${totalJuana}</p>`;
    resultadosHTML += `<p>Ventas de Pedro: Aqua - ${ventasPedro.aqua}, Emoción - ${ventasPedro.emocion}, Alegría - ${ventasPedro.alegria}, Frescura - ${ventasPedro.frescura}</p>`;
    resultadosHTML += `<p>Total dinero recolectado por Pedro: $${totalPedro}</p>`;

    // Determinamos el empleado del mes
    if (totalJuana > totalPedro) {
        resultadosHTML += `<p><strong>El empleado del mes es Juana con $${totalJuana}</strong></p>`;
    } else if (totalPedro > totalJuana) {
        resultadosHTML += `<p><strong>El empleado del mes es Pedro con $${totalPedro}</strong></p>`;
    } else {
        resultadosHTML += `<p><strong>Empate, ambos recolectaron $${totalJuana}</strong></p>`;
    }

    // Insertamos los resultados en el div 'resultados'
    document.getElementById('resultados').innerHTML = resultadosHTML;
}
