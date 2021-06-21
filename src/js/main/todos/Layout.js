import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

const defaultProps = {}

function Layout ({ children, title }) {
  return (
    <div className='list'>
      <h1> { title } </h1>
      { children }
    </div>
  )
}

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps

export default Layout
