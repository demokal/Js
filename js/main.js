class item {

  constructor(nombre, precio, stock, color ) {

    this.nombre = nombre;

    this.precio = parseFloat(precio);

    this.stock = stock;

    this.color = color;
  }

  sumarIva() {
    this.precio *= 1.21;
  }
 
}

const productos = [];

  productos.push(new item("Rosa", 1000, 10, "Rojo"));

  productos.push(new item("Tulipan", 800, 5, "Amarillo"));

  productos.push(new item("Margarita", 500, 8, "Blanco"));

  productos.push(new item("Orquidea", 1500, 3, "Morado"));

  productos.push(new item("Girasol", 1200, 7, "Amarillo"));

  productos.push(new item("Lirio", 900, 4, "Blanco"));

  productos.push(new item("Clavel", 700, 6, "Rojo"));

  productos.push(new item("Hortensia", 1100, 2, "Azul"));

  console.table(productos);

  for (const producto of productos) {

    producto.sumarIva();
  }

  console.table(productos);


 while (confirm("Desea buscar informacion de nuestras flores?")) {

  const buscarProducto = prompt("Que informacion desea buscar?: \n1. Precios de menor a mayor\n2. Stock total \n3. Productos de color:");

  switch (buscarProducto) {
    case "1":
      const productosFiltrados = productos.sort((a, b) => a.precio - b.precio);
      console.table(productosFiltrados);
      break;
    case "2":
      const stockTotal = productos.reduce((total, producto) => total + producto.stock, 0);
      console.log(`Stock total:` + stockTotal);
      break;
    case "3":
      const colorProducto = prompt("Ingrese el color del producto: ");
      const productosFiltradosColor = productos.filter(producto => producto.color.toLowerCase() === colorProducto.toLowerCase());
      console.table(productosFiltradosColor);
      break;
    default:
      console.log("Opción no válida.");
  }
}
  

