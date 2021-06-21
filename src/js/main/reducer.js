import { combineReducers } from 'redux'
import {
  reducer as styleguideReducer,
  reducerKey as styleguideReducerKey,
} from './styleguide'
import { reducerKey as todoReducerKey, reducer as todoReducer } from './todos/reducer'

const reducerKey = 'root'

const reducer = combineReducers({
  [todoReducerKey]: todoReducer,
  [styleguideReducerKey]: styleguideReducer,
})

export { reducer, reducerKey }
