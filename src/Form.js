import React, { Component } from 'react'
import { Box, Button, Form, FormField, Heading, Layer, Text } from 'grommet';
import { Schedule } from 'grommet-icons'
import moment from 'moment'

import Calendar from './Calendar'
// import ls from 'local-storage'

class GoalsForm extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            goal: '',
            endDate: null,
            formatDate: null,
            layerShow: false,
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    onDateSelect = date => {

        const endDate = moment(date)
        const formatDate = endDate.format('D MMMM YYYY')

        this.setState({
            endDate: endDate,
            formatDate: formatDate,
        });
        //i need to create a button that handles the actual date select
    };

    render() {

        const ScheduleLayer = ({ onClose }) => (
          <Layer position='top' onClickOutside={onClose}>
            <Box pad='large' gap='medium'>
              <Text>Select End Date</Text>
              <Box direction='row' gap='medium' align='center'>
                    <Calendar
                    onDateSelect={this.onDateSelect}
                    />
              </Box>
            </Box>
          </Layer>
        )

        const { goal } = this.state;
        const { layerShow } = this.state;

        let layer;

        if (layerShow) {
            layer = <ScheduleLayer
                onClose={() => this.setState({
                layerShow: false })
                }
                />;
        }

        return (

            <Form>
            <Heading
            margin="small"
            level={3}
            >Add New Goal
            </Heading>
                <FormField
                    type="text"
                    name="goal"
                    label="Goal"
                    value={goal}
                    onChange={this.handleChange}
                    required={true}
                />

                <Button
                icon={<Schedule />}
                color="brand"
                size="small"
                label="Date"
                onClick={() => this.setState({
                layerShow: (layerShow ? false : true),
                })}
                />

                <br/>
                <input type="button" value="Submit" onClick={this.submitForm} />

            {layer}

            </Form>
        );
    }
}

export default GoalsForm