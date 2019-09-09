import React, { Component } from 'react';
import {
Button,
Box,
Calendar
} from 'grommet';

class SubmitButton extends Component {
    render() {
        return (
            <Button primary
                type="submit"
                label="Confirm"
                onClick={this.props.sendInput}
            />
        )
    }
}

export default class extends Component {

    state = {}

    onSelectSingle = date => this.setState({ date })

    sendInput = () => {
        this.props.receiveHandler(this.state.date);
    }

    render() {

    return (

        <Box align='center'>
            <Calendar
                size="small"
                margin="small"
                animate={true}
                range={false}
                daysOfWeek={true}
                date={this.state.date}
                onSelect={(date) => {
                    this.onSelectSingle(date)
                }}
            />
            <SubmitButton
                date={this.state.date}
                sendInput={this.sendInput}
            />
        </Box>
    );
  }
}