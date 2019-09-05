import React, { Component } from 'react'
import { Form, FormField, Button } from 'grommet';
import moment from 'moment'

import Calendar from './Calendar'
// import ls from 'local-storage'

class GoalsForm extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            goal: '',
            endDate: null,
        }

        this.state = this.initialState
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

    onDateSelect = date => {

        // const endDate = new Date(date);

        const endDate = moment(date)
        const justMoment = moment()

        console.log(endDate)
        console.log(justMoment)

        console.log(endDate.from(justMoment));
        // omg this works leh

        this.setState({
            endDate: endDate,
        })

    }

    render() {

        const { goal, endDate } = this.state;

        return (
            <Form>
                <FormField
                    type="text"
                    name="goal"
                    label="Goal"
                    value={goal}
                    onChange={this.handleChange}
                    required={true}
                />

                <Calendar
                    onDateSelect={this.onDateSelect}
                />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </Form>
        );
    }
}

export default GoalsForm