import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Read a book',
    list: [{
      _id: 1,
      description: 'Pagar fatura do cartao',
      done: true
    }, {
      _id: 2,
      description: 'Pagar IPVA',
      done: false
    }, {
      _id: 3,
      description: 'Consulta medica na Terca',
      done: false
    }]
  })
})

export default rootReducer