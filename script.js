// Definir productos y sus precios
const productos = [
    { nombre: "Aqua ($200)", precio: 200 },
    { nombre: "Emoción ($180)", precio: 180 },
    { nombre: "Alegría ($160)", precio: 160 },
    { nombre: "Frescura ($150)", precio: 150 }
  ];
  
  // Inicializar datos de vendedores
  const vendedores = [
    { nombre: "Juana", ventas: [0, 0, 0, 0], total: 0 },
    { nombre: "Pedro", ventas: [0, 0, 0, 0], total: 0 }
  ];
  
  function registrarVenta() {
    // Obtener valores del formulario
    const vendedorIndex = document.getElementById("vendedor").value;
    const productoIndex = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
  
    // Validar que se haya ingresado un valor numérico
    if (isNaN(cantidad)) {
      alert("Error: La cantidad debe ser un valor numérico.");
      return;
    }
  
    // Actualizar datos del vendedor y el total
    vendedores[vendedorIndex].ventas[productoIndex] += cantidad;
    vendedores[vendedorIndex].total += cantidad * productos[productoIndex].precio;
  
    // Limpiar el formulario
    document.getElementById("cantidad").value = "";
  
    // Mostrar resultados en consola
    console.clear();
    console.log("Ventas registradas:");
    for (const vendedor of vendedores) {
      console.log(`Vendedor: ${vendedor.nombre}`);
      for (let i = 0; i < productos.length; i++) {
        console.log(`${productos[i].nombre}: ${vendedor.ventas[i]}`);
      }
      console.log(`Total: ${vendedor.total} USD\n`);
    }
  
 // Determinar empleado del mes
let empleadoDelMes = "N/A";
let maxTotal = 0;
let empate = false;

for (const vendedor of vendedores) {
  const nombreVendedor = vendedor.nombre;
  const totalVentas = vendedor.total;
  
  const esMayor = totalVentas > maxTotal;
  const esIgual = totalVentas === maxTotal;

  if (esMayor) {
    empleadoDelMes = nombreVendedor;
    maxTotal = totalVentas;
    empate = false;
  } else if (esIgual) {
    empate = true;
  }
}
  
    // Mostrar empleado del mes
    let resultado = "";
    if (empate) {
        resultado = "Hubo un empate";
    } else {
        resultado = "Empleado del mes: " + empleadoDelMes;
    }
    console.log(resultado);
  }


  