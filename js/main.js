

let flores = []

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

const estado = document.getElementById("estado");

async function cargarFlores() {

  try {

    estado.innerHTML = `
      <p class="text-primary text-center">
        Cargando catálogo...
      </p>
    `;

    const respuesta = await fetch("./json/data.json");

    if (!respuesta.ok) {
      throw new Error();
    }

    flores = await respuesta.json();

    renderizarFlores(flores);

    estado.innerHTML = `
      <p class="text-success text-center">
        Catálogo cargado correctamente.
      </p>
    `;

  } catch {

    estado.innerHTML = `
      <p class="text-danger text-center">
        Error al cargar los productos.
      </p>
    `;

  } finally {

    setTimeout(() => {
      estado.innerHTML = "";
    }, 3000);

  }

}

cargarFlores();

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
  } else {

  Swal.fire({
    title: "Sin stock",
    text: "Esta flor no está disponible actualmente.",
    icon: "warning"
  });
}}

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

  Swal.fire({
    title: "¡Compra realizada!",
    text: "Gracias por elegir nuestra florería.",
    icon: "success",
    confirmButtonText: "Aceptar"
  });

});





