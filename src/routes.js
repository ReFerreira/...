import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Listar from './pages/Listar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/listar" exact component={Listar} />
    </Switch>
  );
}
