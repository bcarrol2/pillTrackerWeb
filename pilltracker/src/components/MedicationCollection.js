import React from 'react';
import MedicationCard from './MedicationCard';

// here we map over all of the data in the db.json file and create and pass that information to each card
const MedicationCollection = (props) => {
    const medicationList = props.medication.map(perscription =>
        <MedicationCard
            key={perscription.id}
            name={perscription.name}
            when={perscription.when}
            description={perscription.description}
            amount={perscription.amount} 
        />
    ) 

    return(
        <div>
            {medicationList}
        </div>
    )
}
export default MedicationCollection;
