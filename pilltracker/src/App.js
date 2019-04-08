import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import MedicationCard from './components/MedicationCard';
import MedicationIndex from './components/MedicationIndex';

const App = () => (
  <div className="App">
    <MedicationIndex />
    <button>Add Medicine</button>
  </div>
)

export default App;
