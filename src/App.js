import React, { Component } from 'react'
import Dashboard from './Dashboard'
import GoalsForm from './Form'
import Goals from './Goals'
// import mobilebanner from './mobile_banner.png'
import banner from './banner.png'
import ls from 'local-storage'
import {
Box,
Grommet,
Image,
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

    removeGoal = index => {
        const { goals } = this.state
        const newGoals = goals.filter((goals, i) => {
                return i != index
            })
        this.setState({
            goals: newGoals
            })
        ls.set('goals', newGoals)
    }

    render() {
        const { goals } = this.state

        return (
            <Grommet theme={theme}>

                <Box>
                <Image src={banner} fit="cover" />
                </Box>

                <Dashboard goals={goals}/>

                {/* main below header container */}
                <Box
                gap="small"
                pad="medium"
                direction="row">

                    {/* create new goals */}
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
                    width="100%"
                    // wrap={true}
                    direction="row"
                    >
                        <Goals
                        goals={goals}
                        removeGoal={this.removeGoal}
                        />
                    </Box>
                </Box>
            </Grommet>
         );
    }
}

export default App;