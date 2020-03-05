
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
    for(let key in person) {
        console.log('Key:', key, 'value:', person[key])
    }
}

const _in = () => {
    console.log('+++++++++++++++++')
    let person  = {
        firstName: 'Vinicius',
        lastName: 'Silva',
        age: 24,
        dream: 'Buy a apartment',
        fear: 'Not to be a good person'
    }

    let hasFear = 'fear' in person
    console.log('Person has fear:', hasFear)

    let cars = ['BMW', 'AUDI','AMG','FIAT', 'FERRARI', 'KIA']
    let hasCar = 25 in cars
    console.log('Person has car:', hasCar)

    let hasCarsInTheList = 'length' in cars
    console.log('Has cars on the list:', hasCarsInTheList)

    let hasThisFunctions = 'isNaN' in Number
    console.log('Object has the function', hasThisFunctions)


}

const _spreadArray = () => {
    console.log('+++++++++++++++++')
    let dreamCars = ['BMW', 'AUDI','AMG']
    let goodCars = ['FIAT', 'KIA']

    let allCars = [...dreamCars, ...goodCars]

    console.log('Cars', allCars)
}

const _spreadObject = () => {
    console.log('+++++++++++++++++')
    let person  = {
        firstName: 'Vinicius',
        lastName: 'Silva',
        age: 24,
        dream: '?',
        fear: 'Not to be a good person'
    }

    let youngPerson = {
        dream: 'Buy a car'
    }

    person  = {...youngPerson, ...person}

    console.log('Young Person', person)

    let maturePerson = {
        dream: 'Buy a house'
    }

    person  = {...person, ...youngPerson, ...maturePerson}
    console.log('Mature person', person)

    /* The last element on the left has the final property to stay in the result */
}

module.exports = {
    _comma,
    _deleteInArray,
    _deleteInObject,
    _in,
    _spreadArray,
    _spreadObject,
}