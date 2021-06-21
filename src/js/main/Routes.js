import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import Layout from './Layout'
import { Routes as TodoRoutes } from './todos'

const propTypes = {}

const defaultProps = {}

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/todos" component={TodoRoutes} />
        <Redirect path="*" to="/todos" />
      </Switch>
    </Layout>
  )
}

Routes.propTypes = propTypes
Routes.defaultProps = defaultProps

export default Routes
