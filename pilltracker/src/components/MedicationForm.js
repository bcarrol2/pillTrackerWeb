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
        // state is set to empty strings for empty form
    }

    // this function posts the perscription from the user to the page and database
    // restful routs post to the same route as a get request
    // preventdefault adds it without having to reload the page
    // headers have to match up 
    // body has to be in a string for json and we are passing it whatever the state is
    // .thens gives promises and the form is cleared out at the end
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
            <div className="medform">
                <h1>Add a perscription!</h1>
                <form onSubmit={this.handleSubmit}>
                <lable>
                    Perscription name:
                    <input name="name" placeholder="Perscription name" value={this.state.name} onChange={event => this.setState({ name: event.target.value})} />
                </lable>
                <br />
                <lable>
                    How many pills are in the bottle?
                    <input name="amount" placeholder="Amount of pills" value={this.state.amount} onChange={event => this.setState({ amount: event.target.value})} />
                </lable>
                <br />
                <lable>
                    Description:
                    <input name="description" placeholder="Description" value={this.state.description} onChange={event => this.setState({ description: event.target.value})} />
                </lable>
                <br />
                <lable>
                    When are you suppose to take the pill?
                    <input name="when" placeholder="When?" value={this.state.when} onChange={event => this.setState({when: event.target.value})} />
                </lable>
                <br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}