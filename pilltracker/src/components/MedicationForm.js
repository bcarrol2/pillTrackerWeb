import React from 'react';

export default class MedicationForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            amount: '',
            description: '',
            when: ''
        }
    }

    // handleChange = (event, {name, value}) => {
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:3000/medication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                amount: this.state.amount,
                description: this.state.description,
                when: this.state.when
            })
        })
        .then(res => res.json())
        .then(perscription => this.props.addPerscription(perscription))
        .then(this.setState({
            name: '',
            amount: '',
            description: '',
            when: ''
        }))
    }

    render(){
        return(
            <div>
                <h1>Add a perscription!</h1>
                <form onSubmit={this.handleSubmit}>
                <lable>Perscription name</lable>
                    <input name="name" placeholder="Perscription name" value={this.state.name} onChange={event => this.setState({ name: event.target.value})} />
                <br />
                <lable>How many pills are in the bottle?</lable>
                    <input name="amount" placeholder="Amount of pills" value={this.state.amount} onChange={event => this.setState({ amount: event.target.value})} />
                <br />
                <lable>Description</lable>
                    <input name="description" placeholder="Description" value={this.state.description} onChange={event => this.setState({ description: event.target.value})} />
                <br />
                <lable>When are you suppose to take the pill?</lable>
                <input name="when" placeholder="When?" value={this.state.when} onChange={event => this.setState({when: event.target.value})} />
                <br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}