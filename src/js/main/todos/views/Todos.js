import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Types from 'types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Spinner } from 'lp-components'
import { selectors } from '../reducer'
// import * as actions from '../actions'
import * as apiActions from 'api-actions'
import AddTodoForm from '../forms/AddTodoForm'
import * as flashActions from 'redux-flash'
import { Link } from 'react-router-dom'

const propTypes = {
  todos: PropTypes.arrayOf(Types.todo),
  fetchTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  flashErrorMessage: PropTypes.func,
  udpateTodoStatus: PropTypes.func.isRequired
}

const defaultProps = {
}

function Todos (
  { 
    todos, 
    fetchTodos,
    addTodo,
    flashErrorMessage,
    udpateTodoStatus
  }
) {
  useEffect(() => { fetchTodos() }, [])
  if (!todos) return <Spinner />
  return (
      <>
        <AddTodoForm 
          onSubmit={addTodo} 
          onSubmitSuccess={(result, dispatch, { reset } ) => reset()}
          onSubmitFail={ (errors) => {
            const message = errors?._error;
            flashErrorMessage(message);
          } } 
        />
        <ul className="todo-items">
          {
            todos.map((todo, key) => {
              return (
                <li key={key}>
                  <label>
                    <input 
                      type="checkbox" 
                      defaultChecked={todo.completed}
                      onChange={() => udpateTodoStatus(todo.id, !todo.completed)} />
                    <Link to={`/todos/${todo.id}`}> { todo.title} </Link>
                  </label>
                </li>
              )
            })
          }
        </ul>
      </>
  )
}

Todos.propTypes = propTypes

Todos.defaultProps = defaultProps

function mapStateToProps (state) {
  return {
    todos: selectors.todos(state),
  }
}

const mapDispatchToProps = {
  fetchTodos: apiActions.fetchTodos,
  addTodo: apiActions.addTodo,
  flashErrorMessage: flashActions.flashErrorMessage,
  udpateTodoStatus: apiActions.udpateTodoStatus
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Todos)
