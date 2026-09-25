// let Apellido = prompt("Ingresa tu apellido:");
// console.log(Apellido);

// let nombre = prompt("Ingresa tu nombre:");
// console.log("Hola " + nombre + "!");

const veinte = 2026;

let año = Number(prompt("Ingresa tu año de nacimiento:"));
console.log(veinte - año);

let email = prompt("Ingresa tu Email:");
let contraseña = prompt("Ingresa tu contraseña:");
alert("Email:Dilan@gmail.com\nContraseña:1234");

let intentos = 1;
while (intentos < 3) {
    email = prompt("Ingresa tu Email:");
    contraseña = prompt("Ingresa tu contraseña:");
    intentos++;
}

if (email === "Dilan@gmail.com" && contraseña === "1234") {
    console.log("¡Bienvenido, " + email + "!");
} else{
    console.log("Email o contraseña incorrectos. Por favor, inténtalo de nuevo.");
}