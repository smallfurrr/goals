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
        pad="medium"
        elevation="medium"
        gap="medium"
        >
            <Text>
              Goal: {row.goal}
              <br />
              Goal End date: {row.formatDate}
              <br />
              Task One: {row.taskOne}
            </Text>
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