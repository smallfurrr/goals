import React, { Component } from 'react'
import {
Box,
Button,
CheckBox,
Heading,
Text,
} from 'grommet'
import { Trash } from 'grommet-icons';

const SimpleCard = props => {

    const cards = props.goals.map((row, index) => {

        return (
        <Box
        key={index}
        // width="medium"
        // wrap={true}
        basis="45%"
        elevation="medium"
        round="medium"
        gap="xsmall"
        margin={{bottom: "small", right: "small"}}
        >
            <Box
            round={{size: "medium", corner: "top"}}
            pad="medium"
            background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
            >
                <Heading
                level={3}
                margin="xsmall"
                color="white"
                >{row.goal}
                </Heading>
            </Box>

            <Box
            pad="medium"
            justify="center"
            >
                <Text>
                  Goal End Date: {row.formatDate}
                  <br/>
                  Task One: {row.taskOne}
                </Text>

                <Box
                direction="row"
                margin={{ top: "medium" }}
                >
                <Button plain
                index={index}
                icon={<Trash />}
                label="Delete Goal"
                // onClick={() => console.log("fuck this shit")}
                onClick={ () => props.removeGoal(index) }
                />
                </Box>
            </Box>
        </Box>
        )
    })
    return <Box wrap={true} direction="row">{cards}</Box>
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