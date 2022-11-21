
// for(let i = 0; i < 4; i++) {
//     console.log(i)
// }


const numeros = [1, 0, 2]

const result = numeros.forEach((numero, i) => {
    console.log(numero, i);
})
console.log(result);

const resFilter = numeros.filter((numero) => numero > 1)
console.log(resFilter + 2);

const resFind = numeros.find((numero) => numero > 1)
console.log(resFind + 2);

const resSome = numeros.some((numero) => numero > 1)

console.log(resSome);



const perdiendoElThis = {
    name: "hola",
    getName: function () { 
        console.log(this)
        setTimeout(function () {
            console.log(this)
        }, this, 3000)
        
    }
}

perdiendoElThis.getName()