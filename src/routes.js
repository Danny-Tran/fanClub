import React from 'react';
import Layout from './HighOrderComponents/Layout'
import { Switch, Route } from 'react-router-dom'
import Home from './Component/Home'

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path='/'/>
      </Switch>
    </Layout>
  )
}

export default Routes;
