import React from 'react'
import exact from 'prop-types-exact'
import { pure } from 'recompose'
import { Link } from 'react-router-dom'
import logo from 'images/rocket.svg'

const propTypes = {}

const defaultProps = {}

function Header() {
  return (
    <header className="navigation">
      <Link to="/" className="logo">
        <img src={logo} alt="LaunchPad Lab" />
      </Link>
    </header>
  )
}

Header.propTypes = exact(propTypes)
Header.defaultProps = defaultProps

export default pure(Header)