import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import { Spinner } from 'lp-components'
// import { connectParams } from 'lp-hoc'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'
// import * as Types from 'types'

const propTypes = {
  // id: PropTypes.number.isRequired,
  // todo: Types.todo,
  // fetchTodo: PropTypes.func.isRequired,
  // clearTodo: PropTypes.func.isRequired,
}

const defaultProps = {}

function TodoShow (  
  // { 
  //   id,
  //   todo, 
  //   fetchTodo,
  //   clearTodo,
  // }
) {
  // useEffect(() => { 
  //  fetchTodo(id)
  //  // Cleanup
  //  return () => clearTodo()
  // }, [ id ])
  // if (!todo) return <Spinner />
  return (
    <div> This is the Todo show view! </div>
  )
}

TodoShow.propTypes = propTypes

TodoShow.defaultProps = defaultProps

function mapStateToProps (/* state */) {
  return {
    // todo: selectors.todo(state)
  }
}

const mapDispatchToProps = {
  // fetchTodo: apiActions.fetchTodo,
  // clearTodo: actions.clearTodo
}

export default compose(
  // connectParams('id'),
  connect(mapStateToProps, mapDispatchToProps),
)(TodoShow)
