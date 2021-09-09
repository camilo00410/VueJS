

const person = {
    name: 'tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'no tiene dinero'
}

// const { name, age, codeName, power = 'No tiene poder' } = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero = ( { name, age, codeName, power = "Hola"} )=>
    // const { name, age, codeName, power = "Hola"} = person;
    ({
        id: 11233432423,
        name,
        age,
        codeName,
        power,
    })


console.log( createHero(person) )