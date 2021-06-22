import React from 'react'
// import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
import { pure } from 'recompose'

const propTypes = {}

const defaultProps = {}

function Footer() {
  return <footer></footer>
}

Footer.propTypes = exact(propTypes)
Footer.defaultProps = defaultProps

export default pure(Footer)
