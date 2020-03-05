const operators = require("./modules/operators")

console.log("Running")

const runOperators = () => {
    console.log('Run operators')
    operators._comma()
    operators._deleteInArray()
    operators._deleteInObject()

}

const run = () => {
    runOperators()
}

run()