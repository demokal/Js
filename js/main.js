

// let saldoInicial = 100000;
// const depositar = (a,b ) => a + b;
// const retirar = (a,b ) => a - b;
// const mostrarSaldo = (a) => console.log("Su saldo actual es: " + a);


// while (confirm("¿Deseas ingresar a Home Banking?")) {
//     let operacion = prompt("que operacion deseas realizar?\n1. Depositar \n2. Retirar \n3. Mostrar Saldo \n4. volver al menu principal");

//     switch (operacion) {
//         case "1":
//             let montoDeposito = Number(prompt("Ingrese el monto a depositar:"));
//             saldoInicial = depositar(saldoInicial, montoDeposito);
//             console.log("Depósito realizado. Su nuevo saldo es: " + saldoInicial);
//             break;
//         case "2":
//             let montoRetiro = Number(prompt("Ingrese el monto a retirar:"));
//             if (montoRetiro <= saldoInicial) {
//                 saldoInicial = retirar(saldoInicial, montoRetiro);
//                 console.log("Retiro realizado. Su nuevo saldo es: " + saldoInicial);
//             } else {
//                 console.log("Fondos insuficientes.");
//             }
//             break;
//         case "3":
//             mostrarSaldo(saldoInicial);
//             break;
//         case "4":
//             console.log("Gracias por usar Home Banking.");
//             break;
//         default:
//             console.log("Operación no válida.");
//     }
// }

let flores = [
    "Rosa",
    "Tulipán",
    "Margarita",
    "Girasol",
    "Orquídea"
];

function mostrarFlores(flores) {
    for (const flor of flores) {
        console.log("Flor disponible: " + flor);
    }
}
flores.push("Narciso");

flores.unshift("Lavanda");

let ultimaFlor = flores.pop();
console.log("Se eliminó la última flor de la lista: " + ultimaFlor);

flores.splice(2, 1, "Lirio");

mostrarFlores(flores);



let florBuscada = prompt("Ingrese el nombre de una flor para buscar:");

if (flores.includes(florBuscada)) {
    let indice = flores.indexOf(florBuscada);
    console.log(
        `La flor "${florBuscada}" está disponible y se encuentra en la posición ${indice}.`
    );
} else {
    console.log(
        `La flor "${florBuscada}" no se encuentra disponible en la tienda.`
    );
}



