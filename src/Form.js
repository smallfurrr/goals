import React, { Component } from 'react'
import { Form, FormField, Button } from 'grommet';
import Calendar from './Calendar'
import DateInput from './Date'
// import ls from 'local-storage'

class GoalsForm extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            goal: '',
            endDate: '',
        }

        this.state = this.initialState
        //at the moment this is resetting on each refresh
    }


    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { goal, endDate } = this.state;

        return (
            <Form>
                <label>Goal</label>
                <input
                    type="text"
                    name="goal"
                    value={goal}
                    onChange={this.handleChange} />
                <label>End Date</label>

                <input
                    type="text"
                    name="endDate"
                    value={endDate}
                    onChange={this.handleChange} />

                <DateInput />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </Form>
        );
    }
}

export default GoalsForm