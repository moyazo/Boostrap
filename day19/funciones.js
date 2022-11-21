
const callback = function () {
    console.log("Hola asincrono")
}

setTimeout(callback, 1000)

console.log("hola sincrono")

function calcula(numero1, numero2, operacion) {

    return operacion(numero1, numero2)
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplica = (a, b) => a * b

const result = calcula(1, 2, multiplica)

console.log(result);

const btnDOMEl = document.querySelector('#btn')

const box  = document.querySelector('#box')

box.onclick = function () {
    console.log("cualquier cosa");
}

// btnDOMEl.onclick = function () {
//     console.log("pulsa")
// }

// btnDOMEl.onclick = function () {
//     console.log("pulsa2")
// }

const accion1 = () => console.log("Accion 1")
const accion2 = () => console.log("Accion 2")

btnDOMEl.addEventListener("click", accion1)

btnDOMEl.addEventListener("click", accion2)

btnDOMEl.removeEventListener("click", accion1)