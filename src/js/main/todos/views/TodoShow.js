import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Spinner } from 'lp-components'
// import { connectParams } from 'lp-hoc'
import { selectors } from '../reducer'
import { selectors as apiSelectors } from 'lp-redux-api'
import * as actions from '../actions'
import * as apiActions from 'api-actions'
import * as Types from 'types'
import { useParams } from 'react-router'
import EditTodoForm from '../forms/EditTodoForm'
import { Link } from 'react-router-dom'
import { routerActions } from 'connected-react-router'
import { flashErrorMessage } from 'redux-flash'
import AlertModal from '../components/AlertModal'

const propTypes = {
  // id: PropTypes.number.isRequired,
  todo: Types.todo,
  fetchTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  flashErrorMessage: PropTypes.func.isRequired,
  clearTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const defaultProps = {}

function TodoShow(
  {
    todo,
    fetchTodo,
    clearTodo,
    editTodo,
    push,
    flashErrorMessage,
    deleteTodo,
    isDeleting
  }
) {

  const { id, action } = useParams();
  const edit = action == Types.Actions.EDIT;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchTodo(id)
    return () => clearTodo()
  }, [id])
  if (!todo) return <Spinner />
  return (
    <div className="todo-details">
      {
        edit ? (
          <EditTodoForm
            initialValues={{
              title: todo.title,
              description: todo.description,
              completed: todo.completed,
            }}
            onSubmit={(params) => editTodo({ id: todo.id, ...params })} onSubmitSuccess={(todo) => {
              push(`/todos/${todo.id}`);
            }}
            onSubmitFail={(errors) => {
              const message = errors.message || 'Could not edit todo. Please try again'
              flashErrorMessage(message)
            }}
            referrer={`/todos/${todo.id}`}
          />
        ) : (
          <>
            <h2>{todo.title}</h2>
            <h3>Description</h3>
            <p>{todo.description}</p>
            <h3>Status</h3>
            <p>{todo.completed ? 'Completed' : 'Open'}</p>
            <Link to={`/todos/${todo.id}/edit`} className="button-primary">
              Edit
            </Link>
            <button
              type="button"
              className="button-warn"
              onClick={async () => {
                setShowAlert(true)
              }}
            >
              Delete
            </button>
            {showAlert && (
              <AlertModal
                onDelete={() =>
                  deleteTodo(todo.id).then(() => {
                    // clearTodos()
                    push('/todos')
                  })
                }
                loading={isDeleting}
                onClose={() => setShowAlert(false)}
              />
            )}
          </>
        )
      }
    </div>
  )
}

TodoShow.propTypes = propTypes

TodoShow.defaultProps = defaultProps

function mapStateToProps(state) {
  return {
    todo: selectors.todo(state),
    isDeleting: apiSelectors.isLoading(state, apiActions.deleteTodo),
  }
}

const mapDispatchToProps = {
  fetchTodo: apiActions.fetchTodo,
  clearTodo: actions.clearTodo,
  editTodo: apiActions.editTodo,
  push: routerActions.push,
  flashErrorMessage,
  deleteTodo: apiActions.deleteTodo
}

export default compose(
  // connectParams('id'),
  connect(mapStateToProps, mapDispatchToProps),
)(TodoShow)
