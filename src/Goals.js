import React, { Component } from 'react'
import { emojisplosion } from 'emojisplosion'
import moment from 'moment'
import {
Box,
Button,
Heading,
Text,
} from 'grommet'
import { Trash, StatusGood } from 'grommet-icons';

class SimpleCard extends Component {

    getTimeRemaining = goal => {
        let endDate = goal.endDate
        let endDateMoment = moment(endDate, 'YYYY-MM-DD').toDate();
        let timeLeft = moment(endDateMoment).fromNow();
        return timeLeft;
    }

    render() {

    const cards = this.props.goals.map((goal, index) => {
        return (
            <Box
            key={index}
            width="medium"
            height="medium"
            elevation="medium"
            round="medium"
            gap="xsmall"
            margin={{bottom: "small", right: "small"}}
            >
                {/* header box */}
                <Box
                round={{size: "medium", corner: "top"}}
                justify="center"
                pad="medium"
                background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
                >
                        <Heading
                        level={3}
                        margin="xsmall"
                        color="white"
                        textAlign="center"
                        >
                        {goal.goal}
                        </Heading>
                </Box>
            {/* header box */}

                {/* goal content box */}
                <Box
                pad="medium"
                justify="center"
                flex={{ grow: 1 }}
                >
                    <Box
                    margin={{ bottom: "medium"}}
                    >
                        <blockquote>
                        {goal.goalReason}
                        </blockquote>
                    </Box>

                    {/* end date box */}
                    <Box
                    margin={{ bottom: "low"}}
                    >
                        <Text>
                          Goal End Date: {goal.formatDate}
                        </Text>
                        <Text>
                          Due {this.getTimeRemaining(goal)}
                        </Text>
                    </Box>
                    {/* end date box */}

                    {/* remove goal box */}
                    <Box
                    direction="row"
                    margin={{ top: "small" }}
                    >
                    <Button plain
                    index={index}
                    icon={<Trash />}
                    label="Delete Goal"
                    onClick={ () => this.props.removeGoal(index) }
                    />
                    </Box>
                    {/* remove goal box */}
                </Box>
                {/* goal content box */}

                {/* goal complete footer */}
                <Box
                round={{size: "medium", corner: "bottom"}}
                justify="center"
                pad="small"
                background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
                >

                    <Button plain
                    // label="Mark as Complete"
                    alignSelf="center"
                    onClick={() => {
                      this.props.completeGoal(index);
                      emojisplosion();
                    }}
                    >
                        <Heading
                        level={4}
                        color="light-1"
                        >
                        Mark as Complete
                        </Heading>
                    </Button>
                </Box>
            {/* goal complete footer */}
            </Box>
        )
    })

    return <Box wrap={true} direction="row">{cards}</Box>

    }
}

class Goals extends Component {
    render(){

        const { goals, removeGoal, completeGoal } = this.props

        return (
            <Box
            // width="large"
            wrap={true}
            width="100%"
            direction="row"
            >
                <SimpleCard
                goals={goals}
                removeGoal={removeGoal}
                completeGoal={completeGoal}
                />
            </Box>
    )}
}

export default Goals