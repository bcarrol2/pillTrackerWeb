import React from 'react';

class MedicationCard extends React.Component{
    constructor(props){
        super(props)

        // created state here for the purpose of the takenPill method
        this.state = {
            amount: this.props.amount
        }

    }

    // this function subtracts only one pill when done is clicked, so they can't double click
    // also could of disabled button after clicked
    takenPill = (event) => {
        this.setState({ amount: this.props.amount - 1 })

        if (this.state.amount < 10) {
            alert('You need a refill', 'You have taken your pill')
        } else {
            alert('You have taken your pill')
        }
        // there is a popup if their medication is below 10 pills
    }

    // this is what displays the individual cards
    render(){
        return(
            <div>
                <div className="card">
                    <div style={{backgroundColor: 'green'}} className="card-header">
                        <h3 className="card-title">{this.props.name}</h3>
                    </div>
                    <div className="card-body">
                        <h4 className="card-text">You have {this.state.amount} pills left!</h4>
                        <h4 className="card-text">You need to take this pill during the {this.props.when}.</h4>
                        <h4 className="card-text">Description: {this.props.description}</h4>
                        <button id="pill-taken-button" onClick={this.takenPill}>Done</button>
                    </div>
                </div>
            </div>
        )
    }    
}

export default MedicationCard;