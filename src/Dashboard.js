import React, { Component } from 'react';
import ls from 'local-storage'
import moment from 'moment'
import {
// Button,
Box,
// Heading,
Text } from 'grommet';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            goals: [],
        }
    }

    componentDidMount() {
        this.setState({
            goals: ls.get('goals') || [],
        })
    }

    getActiveGoals = goals => {
        const activeGoals = goals.length;
        return activeGoals;
    }

    getOverdueGoals = goals => {
        let overDue = [];

        for (let i=0; i < goals.length; i++) {

            let endDate = goals[i].endDate;

            let endDateMoment = moment(endDate, 'YYYY-MM-DD').toDate();

            let difference = (moment(endDateMoment).fromNow());

            console.log(difference);

            if (difference.includes("ago")) {
                overDue.push("orhor")
            }
        }

        return overDue.length;
    }

    render() {

    //declare an empty overdue array
    //loop through the goals array and get each endDate
    //compare each endDate to current moment
    //if its a ??? value (must see how to check leh maybe see if string includes "fron" or "to" or can i just direct compare the dates using >) then push it into the overdue array
    //get length of the overdue array


    //to get total number of goals
    // const fuckeverything = goals.length
    // console.log("number of goals: " + fuckeverything)

    //lol then need to get completed goals also lol WHY DIDNT I USE DATABASE unless i set it into another state property in APP and every time i click complete goal it adds to that count and that's the one i use  woohoo

    return (
        <Box
        direction="row"
        pad="medium"
        gap="medium"
        >
            {/* active goal container */}
            <Box>
                <Text>
                active goals:
                {this.getActiveGoals(this.props.goals)}
                </Text>

                <Text>
                overdue goals:
                {this.getOverdueGoals(this.props.goals)}
                </Text>

            </Box>
            {/* active goal container */}
        </Box>

    );
  }
}