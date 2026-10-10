// let Apellido = prompt("Ingresa tu apellido:");
// console.log(Apellido);

// let nombre = prompt("Ingresa tu nombre:");
// console.log("Hola " + nombre + "!");

let saldoInicial = 100000;
const depositar = (a,b ) => a + b;
const retirar = (a,b ) => a - b;
const mostrarSaldo = (a) => console.log("Su saldo actual es: " + a);


while (confirm("¿Deseas ingresar a Home Banking?")) {
    let operacion = prompt("que operacion deseas realizar?\n1. Depositar \n2. Retirar \n3. Mostrar Saldo \n4. volver al menu principal");

    switch (operacion) {
        case "1":
            let montoDeposito = Number(prompt("Ingrese el monto a depositar:"));
            saldoInicial = depositar(saldoInicial, montoDeposito);
            console.log("Depósito realizado. Su nuevo saldo es: " + saldoInicial);
            break;
        case "2":
            let montoRetiro = Number(prompt("Ingrese el monto a retirar:"));
            if (montoRetiro <= saldoInicial) {
                saldoInicial = retirar(saldoInicial, montoRetiro);
                console.log("Retiro realizado. Su nuevo saldo es: " + saldoInicial);
            } else {
                console.log("Fondos insuficientes.");
            }
            break;
        case "3":
            mostrarSaldo(saldoInicial);
            break;
        case "4":
            console.log("Gracias por usar Home Banking.");
            break;
        default:
            console.log("Operación no válida.");
    }
}