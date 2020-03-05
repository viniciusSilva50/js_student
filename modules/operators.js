
const _comma = () => {
    console.log('+++++++++++++++++')
    for(let i = 0, j = 9, k = (i + j); i <= 9; i++, j--){
        console.log('i',i,'j',j,"k",k)
    }
}

const _deleteInArray = () => {
    console.log('+++++++++++++++++')

    let cars = ['BMW', 'AUDI','AMG','FIAT', 'FERRARI']
    console.log('Array length in begin', cars.length)

    delete cars[3]

    console.log('FOR in')
    for(let key in cars){
        console.log('Key:', key, 'Car:',cars[key])
    }

    console.log('FOR of')
    for(let value of cars){
        console.log('Car:', value)
    }

    console.log('Array length in final', cars.length)

    cars.splice(3,1)
    console.log('Array length after splice', cars.length)
}

const _deleteInObject = () => {
    console.log('+++++++++++++++++')
    let person  = {
        firstName: 'Vinicius',
        lastName: 'Silva',
        age: 24,
        dream: 'Buy a apartment',
        fear: 'Not to be a good person'
    }

    delete person.fear

    console.log('FOR in')
    for(let key in person){
        console.log('Key:', key, 'value:',person[key])
    }



}

module.exports = {
    _comma,
    _deleteInArray,
    _deleteInObject
}