import React from 'react';
import MedicationCollection from './MedicationCollection';

const API = "http://localhost:3000/medication"

class MedicationIndex extends React.Component {

    constructor(){
        super()

        this.state = {
            name: 'Bertha',
            medication: []
        }
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(medication => {
            console.log(medication)
            this.setState({
                medication: medication
            })
        })
    }

    render() {
        let name = this.state.name

        function divHide() {
            let x = document.getElementById("hidediv")
            if (x.style.display === 'block') {
                x.style.display = "none"
            } else {
                x.style.display = 'block'
            }
        }

        const allmedicine = this.state.medication

        return (
            <div className="App">
                <div>
                    <h1>My Personal Pill Tracker</h1>
                </div>
                <h2>Hello, {name}</h2>
                <button onClick={divHide}>Edit name: </button>
                <div id="hidediv">
                    <input type="text" name="name" onChange={event => this.setState({ name: event.target.value })} />
                </div>
                <h1>Your medication:</h1>
                <MedicationCollection medication={allmedicine} />
                
            </div>
        );
    }
}

export default MedicationIndex;