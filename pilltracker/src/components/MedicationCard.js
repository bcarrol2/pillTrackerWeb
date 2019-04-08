import React from 'react';

class MedicationCard extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{this.props.name}</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="card-text">You have {this.props.amount} pills left!</h4>
                        <h4 class="card-text">You need to take this pill during the {this.props.when}.</h4>
                        <h4 class="card-text">Description: {this.props.description}</h4>
                        <button onClick={console.log('hey')}>Done</button>
                    </div>
                </div>
            </div>
        )
    }    
}

export default MedicationCard;