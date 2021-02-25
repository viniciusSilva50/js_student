const {
  pipe,
  values,
  pluck,
  groupBy,
  prop,
  flatten,
} = require('ramda')

const Promise = require('bluebird')

const liquidacoes = [
  {
    id: 'la_01',
    target_account_id: 'ta_01'
  },
  {
    id: 'la_02',
    target_account_id: 'ta_01'
  },
  {
    id: 'la_03',
    target_account_id: 'ta_02'
  },
  {
    id: 'la_04',
    target_account_id: 'ta_03'
  }
]

const idsDeLiquidacoes = pluck('id', liquidacoes)
console.log('---> 1', idsDeLiquidacoes)

const criarGroupoPeloId = groupBy(prop('target_account_id'))
console.log('---> 2', criarGroupoPeloId(liquidacoes))

console.log('---> 3', prop('target_account_id', liquidacoes[0]))

const testPipe = item => pipe(
  criarGroupoPeloId, // agrupa por target_account_id
  values, // pega os valores de cada chave do objeto e transforme em array
  flatten // transforme um conjunto de array em array ---- array de dois niveis vira um
)(item)
// A forma de ler essa execução é chama a função testPipe, passando o parametro item
// e item vira parametro para a função pipe que começa o processo de passagem de fluxo de dados
// o mais dificil e ter em mente o o fluxo que cada função recebe

const resultadoDoValues = testPipe(liquidacoes)
console.log('----> 4', resultadoDoValues)

// JS funcional é bem assim, pensar na entrada de dados e na saida, é uma das formas funcionais

// Agora uma parada chata mas muito foda //
/* high order function */

// a palavra objeto é um parametro que para vez que essa função for chamada a mesma pelo .map vai passar adiante
/** Imagina que fica assim
 * 1 Execução: objeto = {amount: 1000} e liquidação = { id: 'la_01', target_account_id: 'ta_01' },
 * 2 Execução: objeto = {amount: 1000} e liquidação = { id: 'la_02', target_account_id: 'ta_01' },
 * 3 Execução: objeto = {amount: 1000} e liquidação = { id: 'la_03', target_account_id: 'ta_02' },
*/

// Um caso de uso muito comum é criar uma transaction e fazer a execução de cada insert ou update no banco, 
// onde a transaction vai ser sempre a mesma
const concatenar = objeto => async (liquidacao) => {
  return {
    ...objeto,
    ...liquidacao
  }
}

const objetoDeTexto = {
  amount: 1000
}

const run = async () => {
  const resultado = await Promise.map(
    liquidacoes,
    concatenar(objetoDeTexto)
  )
  console.log('----> 5', resultado)
}

run()
