

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

function renderizarFlores(lista) {

  contenedor.innerHTML = "";

  lista.forEach((flor) => {
    contenedor.innerHTML += `
      <div class="col-md-3">
        <div class="card h-100 shadow producto"
             onclick="mostrarProducto(${flores.indexOf(flor)})">

          <img src="https://via.placeholder.com/300x200"
               class="card-img-top"
               alt="${flor.nombre}">

          <div class="card-body">
            <h5 class="card-title">${flor.nombre}</h5>

            <p class="card-text">
              Flor color <strong>${flor.color}</strong>.
            </p>

            <p class="badge bg-success">
              $${flor.precio}
            </p>

            <p class="badge bg-success">
              Stock: ${flor.stock}
            </p>
          </div>
        </div>
      </div>
    `;
    
  });
}

    
renderizarFlores(flores);

const carrito = [];

function mostrarProducto(indice) {
  const flor = flores[indice];

  carrito.push(flor);

  let contenido = "";

  carrito.forEach(item => {
    contenido += `
      <div class="border-bottom mb-2 pb-2">
        <h5>${item.nombre}</h5>
        <p>Color: ${item.color}</p>
        <p>Precio: $${item.precio}</p>
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

  const modal = new bootstrap.Modal(
    document.getElementById("modalCarrito")
  );

  modal.show();
}

const formBuscar = document.getElementById("formBuscar");

formBuscar.onsubmit = function(event) {
  event.preventDefault();

  const busqueda = document.getElementById("buscador").value.toLowerCase();

  const floresFiltradas = flores.filter((flor) => flor.nombre.toLowerCase().includes(busqueda));
  renderizarFlores(floresFiltradas);
}