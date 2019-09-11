import React, { Component } from 'react'
import Dashboard from './Dashboard'
import GoalsForm from './Form'
import Goals from './Goals'
import ls from 'local-storage'
import MediaQuery from 'react-responsive'
import {
Box,
// Button,
Grommet,
// Heading,
Image,
// Text
} from 'grommet';


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
            completedGoals: []
        }
    }

    componentDidMount() {
        this.setState({
            goals: ls.get('goals') || [],
            completedGoals: ls.get('completedGoals') || [],
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
                return i !== index
            })
        this.setState({
            goals: newGoals
            })
        ls.set('goals', newGoals)
    }

    completeGoal = index => {
        //in case i fuck up again
        // this.setState({
        //     completedGoals: [],
        // })
        // ls.set('completedGoals', [])

        this.removeGoal(index);

        const newCompletedGoals = [...this.state.completedGoals, index]

        this.setState({
            completedGoals: newCompletedGoals
        })

        ls.set('completedGoals', newCompletedGoals)
    }

    render() {

        const { goals, completedGoals } = this.state

        return (
            <Grommet theme={theme}>

                <div className="banner">
                </div>

                <Dashboard
                goals={goals}
                completedGoals={completedGoals}
                />

                {/* main below header container */}
                <Box
                gap="small"
                pad="medium"
                align="start"
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
                    {/* create new goals */}

                    {/* all current goals */}
                    <Box
                    width="100%"
                    // wrap={true}
                    direction="row"
                    >
                        <Goals
                        goals={goals}
                        removeGoal={this.removeGoal}
                        completeGoal={this.completeGoal}
                        />
                    </Box>
                </Box>
            </Grommet>
         );
    }
}

export default App;