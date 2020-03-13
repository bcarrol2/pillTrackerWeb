import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Landing from './components/Landing';
import MedicationIndex from './components/MedicationIndex';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/medication" exact component={MedicationIndex} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
