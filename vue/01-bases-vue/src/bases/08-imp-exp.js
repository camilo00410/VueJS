// import {owners} from './data/heroes'

import heroes from "./../data/heroes"



// const [dc, marvel] = owners
// console.log(dc, marvel)


export const getHeroByid = (id2)=>{
    const result = heroes.find(i => i.id === id2)
    return result   
}

// console.log(getHeroByid(2))

export const getHeroByOwner = (dato)=>{
    const result = heroes.filter(i => i.owner === dato)
    return result;
}



// console.log(getHeroByOwner('DC'))


// import { getHeroByid, getHeroByOwner } from './bases/08-imp-exp'


// console.log(getHeroByid(2))
// console.log(getHeroByOwner('DC'))