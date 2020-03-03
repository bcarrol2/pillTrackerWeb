import React from 'react';
import MedicationCollection from './MedicationCollection';
import MedicationForm from './MedicationForm';

const API = "http://localhost:3000/medication"
// storing the database file to a variable for easier use

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
            if (x.style.display === 'block') {
                x.style.display = "none"
            } else {
                x.style.display = 'block'
            }
        }

        // this just stores the new state.medication to a variable
        const allMedicine = this.state.medication

        // here is what is rendered on the page
        return (
            <div className="App">
                <h1>My Personal Pill Tracker</h1>
                <h2>Hello, {name}</h2>
                <button onClick={divHide}>Edit name: </button>
                <div id="hidediv">
                    <input type="text" name="name" onChange={event => this.setState({ name: event.target.value })} />
                </div>
                <MedicationForm addPerscription={this.addPerscription}/>
                <h1>Your medication:</h1>
                <MedicationCollection medication={allMedicine} />
                <br/>
            </div>
        );
        // above MedicationIndex is running MedicationCollection and passing the new information
        // same goes for MedicationForm
    }
}

export default MedicationIndex;