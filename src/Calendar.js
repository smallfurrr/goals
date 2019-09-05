import React, { Component } from 'react';
import { Calendar } from 'grommet';

export default class extends Component {

    state = {}

    onSelectSingle = date => this.setState({ date })

    render() {

    return (
        <Calendar
            size="small"
            animate={true}
            range={false}
            date={this.state.date}
            onSelect={(date) => {
                this.onSelectSingle(date)
                this.props.onDateSelect(date)
            }}
        />
    );
  }
}