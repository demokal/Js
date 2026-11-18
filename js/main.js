

const flores = [
  { nombre: "Rosa", precio: 1000, stock: 10, color: "Rojo" },
  { nombre: "Tulipan", precio: 800, stock: 5, color: "Amarillo" },
  { nombre: "Margarita", precio: 500, stock: 8, color: "Blanco" },
  { nombre: "Orquidea", precio: 1500, stock: 3, color: "Morado" },
  { nombre: "Girasol", precio: 1200, stock: 7, color: "Amarillo" },
  { nombre: "Lirio", precio: 900, stock: 4, color: "Blanco" },
  { nombre: "Clavel", precio: 700, stock: 6, color: "Rojo" },
  { nombre: "Hortensia", precio: 1100, stock: 2, color: "Azul" }
];

const contenedor = document.getElementById("contenedor-flores");

// vista de los productos

function renderizarFlores(lista) {

  contenedor.innerHTML = "";

  lista.forEach((flor) => {
    const { nombre, precio, stock, color } = flor;
    contenedor.innerHTML += `
      <div class="col-md-3">
        <div class="card h-100 shadow producto"
             onclick="mostrarProducto(${flores.indexOf(flor)})">

          <img src="https://via.placeholder.com/300x200"
               class="card-img-top"
               alt="${nombre}">

          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>

            <p class="card-text">
              Flor color <strong>${color}</strong>.
            </p>

            <p class="badge bg-success">
              $${precio}
            </p>

            <p class="badge ${
              stock > 0 ? "bg-success" : "bg-danger"}">
              ${
              stock > 0 ? `Stock: ${stock}`: "Sin stock"}
            </p>
          </div>
        </div>
      </div>
    `;
    
  });
}

    
renderizarFlores(flores);

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function mostrarProducto(indice) {

  const flor = flores[indice];

  if (flor.stock > 0) {

    carrito.push(flor);

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

    actualizarCarrito();

    const modal = new bootstrap.Modal(
      document.getElementById("modalCarrito")
    );

    modal.show();
  }
}

// actualiza segun accion del usuario

function actualizarCarrito() {

  let contenido = "";

  carrito.forEach((item, index) => {

    const { nombre, precio, color } = item;

    contenido += `
      <div class="border-bottom mb-2 pb-2">
        <h5>${nombre}</h5>
        <p>Color: ${color}</p>
        <p>Precio: $${precio}</p>

        <button class="btn btn-danger btn-sm"
                onclick="eliminarDelCarrito(${index})">
          Eliminar
        </button>
      </div>
    `;
  });

  document.getElementById("contenidoCarrito").innerHTML = contenido;

  const total = carrito.reduce(
    (acum, item) => acum + item.precio,
    0
  );

  document.getElementById("totalCarrito").textContent =
    `Total: $${total}`;
}

// Eliminar del carrito

function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  actualizarCarrito();
}

const formBuscar = document.getElementById("formBuscar");

formBuscar.onsubmit = function(event) {

  event.preventDefault();

  const busqueda = document.getElementById("buscador").value.toLowerCase();

  const floresFiltradas = flores.filter((flor) => flor.nombre.toLowerCase().includes(busqueda));
  renderizarFlores(floresFiltradas);
}

document.getElementById("btnPagar").addEventListener("click", () => {

  carrito.forEach(itemCarrito => {

    const florOriginal = flores.find(
      flor => flor.nombre === itemCarrito.nombre
    );

    if (florOriginal && florOriginal.stock > 0) {
      florOriginal.stock--;
    }
  });

  carrito.length = 0;

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  actualizarCarrito();
  renderizarFlores(flores);

});

