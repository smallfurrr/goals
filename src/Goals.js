import React, { Component } from 'react'
import ls from 'local-storage'
import {
Box,
Button,
CheckBox,
Heading,
Text,
} from 'grommet'
import { Trash } from 'grommet-icons';



class SimpleCheckBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: !!props.checked
        };
    }

    componentDidMount() {
        this.setState({
            checked: ls.get('checked')
        })
    }

    onChange = event => {

        const checkcheck = event.target.checked

        this.setState({
            // checked: event.target.checked
            checked: checkcheck
        });

        ls.set('checked', checkcheck)
    }

    render() {

    const { checked } = this.state;

    return (
          <CheckBox
            {...this.props}
            checked={checked}
            onChange={this.onChange}
          />
    );
  }
}

const SimpleCard = props => {

    const cards = props.goals.map((row, index) => {

        return (
        <Box
        key={index}
        width="medium"
        height="medium"
        // wrap={true}
        // basis="45%"
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
                <Box
                margin={{ bottom: "medium"}}
                >
                    <Text>
                      Goal End Date: {row.formatDate}
                    </Text>
                </Box>

                 <Heading
                level={4}
                fill={true}
                margin={{ bottom:"xsmall"} }
                >
                Tasks
                </Heading>

                <Box
                direction="row"
                align="center"
                >
                    <Text
                    margin={{ right: "small"}}
                    >
                    {row.taskOne}
                    </Text>
                    <SimpleCheckBox/>
                </Box>

                <Box
                direction="row"
                margin={{ top: "large" }}
                >
                <Button plain
                index={index}
                icon={<Trash />}
                label="Delete Goal"
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