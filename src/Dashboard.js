import React, { Component } from 'react';
import ls from 'local-storage'
import moment from 'moment'
import {
Button,
Box,
Heading,
Text } from 'grommet';

export default class extends Component {

    constructor(props) {
        super(props)

        this.state = {
            goals: [],
        }
    }

    componentDidMount() {

        this.setState({
            goals: ls.get('goals') || [],
        })
    }

    render() {

    const goals = ls.get('goals')

    for (let i=0; i < goals.length; i++) {
        let endDate = goals[i].endDate;
        // let holyfuck = moment(endDate).format('DD-MMM-YYYY')
        let holyfuck = moment(endDate, 'YYYY-MM-DD').toDate();
        console.log(holyfuck)
        console.log(typeof holyfuck);
        console.log(moment(holyfuck).fromNow())

        // const date = moment()
        // console.log(typeof date);
    }

    //declare an empty overdue array
    //loop through the goals array and get each endDate
    //compare each endDate to current moment
    //if its a ??? value then push it into the overdue array
    //get length of the overdue array

    const fuck = goals.map((goals, index) => {

            return (
            <Box key={index}>
                <Text>{goals.endDate}</Text>
            </Box>
        )
    })

    //to get total number of goals
    // const fuckeverything = goals.length
    // console.log("number of goals: " + fuckeverything)

    //lol then need to get completed goals also lol WHY DIDNT I USE DATABASE unless i set it into another state property in APP and every time i click complete goal it adds to that count and that's the one i use  woohoo

    return (
        <Box>{fuck}</Box>
    );
  }
}