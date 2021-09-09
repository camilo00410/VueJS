import { getHeroByid } from './bases/08-imp-exp'

// console.log('Inicio')

// new Promise( (resolve, reject) => {
//     console.log('cuerpo de la promesa')
//     // resolve('Promesa resulta')
//     reject('Promesa resuelta con error')
// })
//     // .then(data=>console.log(data))
//     .then(console.log)
//     // .catch(err=>console.error(err))
//     .catch(console.error)

// console.log('Fin')

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
        
            const hero = getHeroByid(id)

            if(hero){
                resolve(hero)
            }else{
                reject('El heroe no existe')
            }

        }, 1000);
    });
}

getHeroByIdAsync(1)
    .then(data => {
        console.log(`el heroe es ${data.name}`)
    })
    .catch(console.error)