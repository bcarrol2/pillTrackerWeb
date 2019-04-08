import React from 'react';

class MedicationCard extends React.Component{
    constructor(){
        super()

        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <div class="card">
                    <div class="card-header">
                        Medication:
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Albuterol</h5>
                        <p class="card-text">Take one at 5:00</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MedicationCard;