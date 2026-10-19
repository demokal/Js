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

  console.table(productos);

  for (const producto of productos) {

    producto.sumarIva();
  }

  console.table(productos);