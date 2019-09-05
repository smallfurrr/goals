import React, { Component } from 'react';
import { Calendar } from 'grommet';

export default class extends Component {

    // state = {}

    // onSelectSingle = date => {

        // console.log(typeof date);
        // var CDate = new Date(date);
        // console.log(typeof CDate);

        // const month = CDate.getMonth()
        // console.log(month)
        // conversion to date works


    //     this.setState({
    //         date,
    //     })

    // }

    render() {

    // const { date } = this.state;

    return (
        <Calendar
            size="small"
            range={false}
            date={(new Date())}
            onSelect={(date) => {
                this.props.onDateSelect(date)
            }}
        />
    );
  }
}

// date={date}
// onSelect={this.onSelectSingle}


  // onSelectRange = (selectedDate) => {
  //   const { date, dates, previousSelectedDate } = this.state;
  //   if (!dates) {
  //     if (!date) {
  //       this.setState({ date: selectedDate });
  //     } else {
  //       const priorDate = new Date(date);
  //       const nextDate = new Date(selectedDate);
  //       if (priorDate.getTime() < nextDate.getTime()) {
  //         this.setState({ date: undefined, dates: [[date, selectedDate]] });
  //       } else if (priorDate.getTime() > nextDate.getTime()) {
  //         this.setState({ date: undefined, dates: [[selectedDate, date]] });
  //       }
  //     }
  //   } else {
  //     const priorDates = dates[0].map(d => new Date(d));
  //     const previousDate = new Date(previousSelectedDate);
  //     const nextDate = new Date(selectedDate);
  //     if (nextDate.getTime() < previousDate.getTime()) {
  //       if (nextDate.getTime() < priorDates[0].getTime()) {
  //         this.setState({ dates: [[selectedDate, dates[0][1]]] });
  //       } else if (nextDate.getTime() > priorDates[0].getTime()) {
  //         this.setState({ dates: [[dates[0][0], selectedDate]] });
  //       }
  //     } else if (nextDate.getTime() > previousDate.getTime()) {
  //       if (nextDate.getTime() > priorDates[1].getTime()) {
  //         this.setState({ dates: [[dates[0][0], selectedDate]] });
  //       } else if (nextDate.getTime() < priorDates[1].getTime()) {
  //         this.setState({ dates: [[selectedDate, dates[0][1]]] });
  //       }
  //     }
  //   }
  //   this.setState({ previousSelectedDate: selectedDate });
  // }