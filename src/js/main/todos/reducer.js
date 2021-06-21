import { handleActions } from 'redux-actions'
import { selectorForSlice } from 'lp-redux-utils'
import { setOnSuccess } from 'lp-redux-api'
import * as apiActions from 'api-actions'

const reducerKey = 'todo'
const slice = 'root.todo'

const initialState = {}

const reducer = handleActions({
  [apiActions.fetchTodos]: setOnSuccess('todos'),
  // [apiActions.fetchTodo]: setOnSuccess('todo'),
  // [actions.clearTodo]: unsetState('todo'),
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  todos: select('todos'),
  todo: select('todo'),
}

export { reducer, selectors, reducerKey }
