// let Apellido = prompt("Ingresa tu apellido:");
// console.log(Apellido);

// let nombre = prompt("Ingresa tu nombre:");
// console.log("Hola " + nombre + "!");

const veinte = 2026;

let año = Number(prompt("Ingresa tu año de nacimiento:"));
console.log(veinte - año);

let intentos = 0;
while (intentos < 3) {
    let email = prompt("Ingresa tu Email:");
    let contraseña = prompt("Ingresa tu contraseña:");
    if(email === "dilan@gmail.com" && contraseña === "1234") {
    console.log("¡Bienvenido, " + email + "!");
} else {
        console.log("Email o contraseña incorrectos." + " Intento " + (intentos + 1) + " de 3.");
        intentos++;
    
}
}

