import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import * as Types from 'types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import { Spinner } from 'lp-components'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
import * as apiActions from 'api-actions'

const propTypes = {
  // todos: PropTypes.arrayOf(Types.todo),
  // fetchTodos: PropTypes.func.isRequired,
}

const defaultProps = {}

function Todos (
  { 
    // todos, 
    fetchTodos,
  }
) {
  useEffect(() => { fetchTodos() }, [])
  // if (!todos) return <Spinner />
  return (
    <div> This is the Todo index view! </div>
  )
}

Todos.propTypes = propTypes

Todos.defaultProps = defaultProps

function mapStateToProps (/* state */) {
  return {
    // todos: selectors.todos(state),
  }
}

const mapDispatchToProps = {
  fetchTodos: apiActions.fetchTodos,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Todos)
