import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimalCrossing from '../../containers/AnimalCrossing';
import AnimalCrossingDetails from '../../containers/AnimalCrossingDetails';


export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path ='/' component={AnimalCrossing} />
      <Route path="/:id" component={AnimalCrossingDetails} />
    </Switch>
  </BrowserRouter>
  );
}
