import React from 'react';
import {Switch, Route} from 'react-router-dom';
import detail from '@/views/detail';
import order from '@/views/Order';

function DetailApp () {
  return (
    <Switch>
      <Route path = '/detail/order' component = { order }/>
      <Route path = '/detail/:id' component = { detail }/>
      <Route to = '/' component = {detail}/>
    </Switch>
  )
}

export default DetailApp;