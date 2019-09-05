import React, { Component } from 'react'
import ls from 'local-storage'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            goal: '',
            endDate: '',
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

    render() {
        const { goal, endDate } = this.state;

        return (
            <form>
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
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form