import React, { Component } from 'react'
import GoalsForm from './Form';
import Goals from './Goals';
import { Box, DataTable, Grommet, Meter, Text } from 'grommet';

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

    state = {
        goals: [],
    }

    handleSubmit = goal => {
        this.setState({ goals: [...this.state.goals, goal] })
    }

    render() {
        const { goals } = this.state

        return (
            <Grommet theme={theme}>
                <AppBar>
                    #GOALS
                </AppBar>
                <GoalsForm handleSubmit={this.handleSubmit}/>
                <Goals goals={goals}/>
            </Grommet>
         );
    }
}

export default App;