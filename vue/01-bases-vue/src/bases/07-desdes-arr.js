const character = ['Goku', 'Vegeta', 'Trunks']

// const goku = character[0]
// const vegeta = character[1]
// const trunks = character[2]

character.forEach(element => {
    console.log(element)
});

const [, , trunks, goten = 'No tiene valor'] = character
console.log(trunks)

const returnArray = ([ letters, numbers ]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['XYZ', 987])

console.log(letters, numbers)