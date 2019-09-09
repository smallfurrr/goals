import React, { Component } from 'react'
import { emojisplosion } from 'emojisplosion'
import moment from 'moment'
import {
Box,
Button,
Heading,
Text,
} from 'grommet'
import { Trash } from 'grommet-icons';

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
                pad="medium"
                background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
                >
                    <Heading
                    level={3}
                    margin="xsmall"
                    color="white"
                    >{goal.goal}
                    </Heading>
                </Box>
            {/* header box */}

                {/* goal content box */}
                <Box
                pad="medium"
                justify="center"
                flex={{ grow: 1 }}
                >   {/* end date box */}
                    <Box
                    margin={{ bottom: "medium"}}
                    >
                        <Text>
                          Goal End Date: {goal.formatDate}
                        </Text>
                        <Text>
                          Due: {this.getTimeRemaining(goal)}
                        </Text>
                    </Box>
                    {/* end date box */}

                    {/* remove goal box */}
                    <Box
                    direction="row"
                    margin={{ top: "large" }}
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
                justify="end"
                pad="medium"
                background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
                >

                    <Button plain
                    label="Goal Complete"
                    onClick={() => {
                      this.props.removeGoal(index);
                      emojisplosion();
                    }}
                    />
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

        const { goals, removeGoal } = this.props

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
                />
            </Box>
    )}
}

export default Goals