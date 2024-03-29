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
        direction="row-responsive"
        pad="medium"
        gap="medium"
        justify="center"
        >
            {/* active goal container */}
            <Box
            className="goal-container"
            border={{ size: "medium", style: "solid", color:"brand" }}
            elevation="small"
            round="medium"
            pad="small"
            width="30%"
            justify="center"
            >
                <Heading
                level={3}
                margin={{ vertical: "small" }}
                color="brand"
                textAlign="center"
                >
                Active Goals
                </Heading>
                <Text
                textAlign="center"
                color="dark-2"
                size="xxlarge"
                >
                    {this.getActiveGoals(this.props.goals)}
                </Text>
            </Box>

            {/* overdue goal container */}
            <Box
            className="goal-container"
            border={{ size: "medium", style: "solid", color:"status-critical" }}
            elevation="small"
            round="medium"
            pad="small"
            width="30%"
            justify="center"
            >
                <Heading
                level={3}
                margin={{ vertical: "small" }}
                color="status-critical"
                textAlign="center"
                >
                Overdue Goals
                </Heading>

                <Text
                textAlign="center"
                color="dark-2"
                size="xxlarge">
                {this.getOverdueGoals(this.props.goals)}
                </Text>
            </Box>

            {/* completed goal container */}
            <Box
            className="goal-container"
            border={{ size: "medium", style: "solid", color: "neutral-1" }}
            elevation="small"
            round="medium"
            pad="small"
            width="30%"
            justify="center"
            >
                <Heading
                level={3}
                margin={{ vertical: "small" }}
                color="neutral-1"
                textAlign="center"
                >
                Completed Goals
                </Heading>

                <Text
                textAlign="center"
                color="dark-2"
                size="xxlarge">
                {this.getCompletedGoals(this.props.completedGoals)}
                </Text>
            </Box>
        </Box>

    );
  }
}