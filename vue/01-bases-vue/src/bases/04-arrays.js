const arreglo = [1,2,3,4]
arreglo.push(5)
// const arreglo2 = new Array(100)

const arreglo2 = []
arreglo2.push( ...arreglo, 6 ) 

const arreglo3 = arreglo2.map(function(n){
    return n * 2
})

arreglo3.push(14)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

// console.log(arreglo2)