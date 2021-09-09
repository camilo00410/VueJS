

const persona = {
    nombre: 'Camilo',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 523123,
        lat: 14.3232,
        lng: 34.456842
    }
}

const persona2 = { ...persona };
persona2.nombre = 'Peter'
persona2.apellido = 'Loaiza'


console.log(persona)
console.log(persona2);