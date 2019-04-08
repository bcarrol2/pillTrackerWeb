import React from 'react';

const API = "http://localhost:3000/medication"

class MedicationIndex extends React.Component {

    constructor(){
        super()

        this.state = {
            name: '',
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
            if (x.style.display === 'none') {
                x.style.display = "block"
            } else {
                x.style.display = 'none'
            }
        }

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

            </div>
        );
    }
}

export default MedicationIndex;