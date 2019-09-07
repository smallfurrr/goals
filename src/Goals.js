import React, { Component } from 'react'
import {
Box,
CheckBox,
Heading,
Text,
} from 'grommet'
//Later change goal box to use Grommet instead of Material

const SimpleCard = props => {

    const cards = props.goals.map((row, index) => {

        return (
        <Box
        key={index}
        width="medium"
        elevation="medium"
        round="medium"
        gap="xsmall"
        >
            <Box
            round={{size: "medium", corner: "top"}}
            pad="medium"
            background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
            >
                <Heading
                level={2}
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
            </Box>
        </Box>
        )
    })
    return <div>{cards}</div>
}

class Goals extends Component {
    render(){

        const { goals } = this.props

        return (
            <SimpleCard goals={goals} />
    )}
}

export default Goals