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
        <Route path="/" exact component={MedicationIndex} />
        <Route path="/home" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
