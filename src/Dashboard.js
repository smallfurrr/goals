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

            if (difference.includes("ago")) {
                overDue.push("orhor")
            }
        }

        return overDue.length;
    }

    getCompletedGoals = goals => {
        const completedGoals = goals.length;
        return completedGoals;
    }

    render() {


    //create completedGoals array in app state
    //create new completedGoals method that is essentially removeGoals but also adds one to the completedGoals function
    //change the onclick function for the completeGoals function to that one
    //in here, get that completedGoals array using ls.get
    //???
    //profit

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

                <Text>
                completed goals:
                {this.getCompletedGoals(this.props.completedGoals)}
                </Text>

            </Box>
            {/* active goal container */}
        </Box>

    );
  }
}