import { React, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Blocks from './components/Blocks';
import BlockView from './components/BlockView';
import NoMatch from './components/NoMatch';

const Block = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/blocks' component={Blocks} />
    <Route exact path='/blocks/:id' component={BlockView} />
    <Route component={NoMatch} />
  </Switch>
)


export default Block;