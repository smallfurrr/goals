import React, { Component } from 'react';
import { Calendar } from 'grommet';

export default class extends Component {

    render() {

    return (
        <Calendar
            size="small"
            animate={true}
            range={false}
            date={(new Date())}
            onSelect={(date) => {
                date = date
                this.props.onDateSelect(date)
            }}
        />
    );
  }
}