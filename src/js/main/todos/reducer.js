import { handleActions } from 'redux-actions'
import { selectorForSlice, unsetState } from 'lp-redux-utils'
import { setOnSuccess } from 'lp-redux-api'
import * as apiActions from 'api-actions'
import * as actions from './actions'

const reducerKey = 'todo'
const slice = 'root.todo'

const initialState = {}

const reducer = handleActions({
  [apiActions.deleteTodo]: setOnSuccess('todos', ({ payload: { data: id } }, state) => {
    return state.todos.filter(todo => todo.id !== id);
  }),
  [apiActions.fetchTodos]: setOnSuccess('todos'),
  [apiActions.addTodo]: setOnSuccess('todos', ({ payload: { data: todo } }, state) => {
    return [...state.todos, todo]
  }),
  [apiActions.fetchTodo]: setOnSuccess('todo'),
  [actions.clearTodo]: unsetState('todo'),
  [apiActions.editTodo]: setOnSuccess('todo'),
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  todos: select('todos'),
  todo: select('todo'),
}

export { reducer, selectors, reducerKey }
