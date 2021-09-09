
const saludar = (xyz) => `Hola ${xyz}`

const nombre = 'Tony'
console.log( saludar(nombre) )

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'Tony001'
    })

console.log(getUser())

const heroes = [{
        id: 1,
        name: 'Batman'
    },{
        id: 2,
        name: 'Superman'
    }]


// const found = heroes.find(element => element.id = 1)
const eve = (element) => element.id == 1
console.log(heroes.some(eve));