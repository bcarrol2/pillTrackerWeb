import React from 'react';
import MedicationCard from './MedicationCard';

    const MedicationCollection = (props) => {
        // console.log('this is', props)
        const medicationList = props.medication.map(perscription =>
            <MedicationCard
                key={perscription.id}
                name={perscription.name}
                when={perscription.when}
                description={perscription.description}
                amount={perscription.amount} />)
                console.log('this is', props)
    

    return(
        <div>
                    {medicationList}
        </div>
    )
}
export default MedicationCollection;
