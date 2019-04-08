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
            alert('You need a refill')
        } else {
            alert('You have taken your pill')
        }
        // there is a popup if their medication is below 10 pills
    }

    // this is what displays the individual cards
    render(){
        console.log(this.props.amount)
        console.log(this.props.key, 'key')
        return(
            <div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{this.props.name}</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="card-text">You have {this.state.amount} pills left!</h4>
                        <h4 class="card-text">You need to take this pill during the {this.props.when}.</h4>
                        <h4 class="card-text">Description: {this.props.description}</h4>
                        <button onClick={this.takenPill}>Done</button>
                    </div>
                </div>
            </div>
        )
    }    
}

export default MedicationCard;