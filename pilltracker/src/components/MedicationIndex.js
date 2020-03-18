import React from 'react';
import MedicationCollection from './MedicationCollection';
import MedicationForm from './MedicationForm';
import styled from 'styled-components';

const API = "http://localhost:3000/medication"
// storing the database file to a variable for easier use

const StyledBody = styled.div `
  background-color: lightblue;
  padding: 20px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

class MedicationIndex extends React.Component {

    constructor(){
        super()

        this.state = {
            name: 'Bertha',
            medication: []
        }
    }

    // this fetches the data from the db.json file
    // .then returns a promise
    // then the empty array in state pushes in data we fetched
    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(medication => {
            this.setState({
                medication: medication
            })
        })
    }

    // this function for the user to add a perscription
    addPerscription = (perscription) => {
        this.setState({
            medication: [...this.state.medication, perscription]
        })
    }

    render() {
        let name = this.state.name

        // this function hides the edit name input box
        function divHide() {
            let x = document.getElementById("hidediv")
            if (x.style.display === 'none') {
                x.style.display = "block"
            } else {
                x.style.display = 'none'
            }
        }

        // this just stores the new state.medication to a variable
        const allMedicine = this.state.medication

        // here is what is rendered on the page
        return (
            <StyledBody>
            <div>
                <h1 style={{color: 'navy', textAlign: 'center'}}>My Personal Pill Tracker</h1>
                <h2 style={{textDecoration: 'underline'}}>Hello, {name}</h2>
                {/* <button id="basic-button" onClick={divHide}>Edit name: </button>
                <div id="hidediv">
                    <input type="text" name="name" onChange={event => this.setState({ name: event.target.value })} />
                </div> */}
                <MedicationForm addPerscription={this.addPerscription}/>
                <h1>Your medication:</h1>
                <MedicationCollection medication={allMedicine} />
                <br/>
            </div>
            </StyledBody>
        );
        // above MedicationIndex is running MedicationCollection and passing the new information
        // same goes for MedicationForm
    }
}

export default MedicationIndex;