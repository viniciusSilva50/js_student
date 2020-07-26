
const { promiseAllTest } = require('./modules/promises')

const runPromises = async () => {
  console.log('Start run promises')
  await promiseAllTest()
  console.log('End run promises')
}

const run = () => {
  runPromises()
}

run()
