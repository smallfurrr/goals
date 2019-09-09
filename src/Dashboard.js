import React, { Component } from 'react';
import ls from 'local-storage'
import moment from 'moment'
import {
// Button,
Box,
Heading,
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

    return (
        <Box
        direction="row"
        pad="medium"
        gap="medium"
        justify="center"
        >
        {/* active goal container */}
            <Box
            // background={{color: "#E5764E"}}
            background={{ color: "brand" }}
            elevation="small"
            round="medium"
            pad="medium"
            justify="center"
            >
                <Heading
                level={3}
                margin={{ vertical: "small" }}
                color="light-1"
                >
                Active Goals
                </Heading>
                <Text
                textAlign="center"
                color="light-1"
                size="xxlarge"
                >
                    {this.getActiveGoals(this.props.goals)}
                </Text>
            </Box>

            <Box
            background={{ color: "status-critical" }}
            elevation="small"
            round="medium"
            pad="medium"
            justify="center"
            >
                <Heading
                level={3}
                margin={{ vertical: "small" }}
                >
                Overdue Goals
                </Heading>

                <Text
                textAlign="center"
                color="light-1"
                size="xxlarge">
                {this.getOverdueGoals(this.props.goals)}
                </Text>
            </Box>

            <Box
            background={{ color: "neutral-1" }}
            elevation="small"
            round="medium"
            pad="medium"
            justify="center"
            >
                <Heading
                level={3}
                margin={{ vertical: "small" }}
                >
                Completed Goals
                </Heading>

                <Text
                textAlign="center"
                color="light-1"
                size="xxlarge">
                {this.getCompletedGoals(this.props.completedGoals)}
                </Text>
            </Box>
        {/* active goal container */}
        </Box>

    );
  }
}