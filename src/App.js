import React, { Component } from 'react'
import GoalsForm from './Form';
import Goals from './Goals';
import ls from 'local-storage'
import {
Box,
DataTable,
Grommet,
Meter,
Text } from 'grommet';


const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            goals: [],
        }
    }

    componentDidMount() {
        this.setState({
            goals: ls.get('goals') || [],
        })
    }

    handleSubmit = goal => {
        const newGoals = [...this.state.goals, goal]
        this.setState({
            goals: newGoals
        })
        ls.set('goals', newGoals)
    }

    render() {
        const { goals } = this.state

        return (
            <Grommet theme={theme}>
                <AppBar>
                    #GOALS
                </AppBar>
                {/* overall container */}
                <Box
                gap="small"
                pad="medium"
                wrap="true"
                direction="row">
                    {/* create new goals box */}
                    <Box
                    pad="medium"
                    elevation="medium"
                    width="medium"
                    >
                        <GoalsForm
                        handleSubmit={this.handleSubmit}
                        />
                    </Box>

                    {/* all current goals */}
                    <Box
                    width="large"
                    >
                        <Goals
                        goals={goals}
                        />
                    </Box>
                </Box>
            </Grommet>
         );
    }
}

export default App;