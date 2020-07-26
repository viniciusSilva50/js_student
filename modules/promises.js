
const promiseAllTest = async () => {
  try {
    const firstPromise = new Promise(resolve => resolve('vinicius da silva'))
    const secondPromise = new Promise((resolve, reject) => reject(new Error('Deu erro')))

    const [firstresult, secondResult] = await Promise
      .allSettled([firstPromise, secondPromise])
      .then(results => {
        const [firstInsideResult, secondInsideResult] = results
        console.log('Insides results', firstInsideResult, secondInsideResult)
        return [true, true]
      })
      .catch(err => {
        console.log('Error on promise all', err)
        return [false, false]
      })

    console.log('Fim do teste de promise all', firstresult, secondResult)
  } catch (err) {
    console.error('Um erro ocorreu!', err.message)
  }
}

module.exports = {
  promiseAllTest
}
