import React, { Component } from 'react';
import { Button, Box, Calendar, Text } from 'grommet';

class SubmitButton extends Component {
    render() {
        return (
            <Button primary
                type="submit"
                label="Confirm"
                onClick={this.props.sendInput}
                // onClick={ () => console.log("why the fuck" + date) }
            />
        )
    }
}


export default class extends Component {

    state = {}

    onSelectSingle = (date) => this.setState({ date })
    sendInput = () => {
        this.props.receiveHandler(this.state.date);
    }

    render() {

    return (

        <Box align='center'>
            <Text>Select End Date</Text>
            <Calendar
                size="small"
                margin="small"
                animate={true}
                range={false}
                date={this.state.date}
                onSelect={(date) => {
                    this.onSelectSingle(date)
                    // this.props.onDateSelect(date)
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