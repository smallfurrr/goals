import React, { Component } from 'react'
import Calendar from './Calendar'
import moment from 'moment'
import {
Box,
Button,
Form,
FormField,
Heading,
Layer,
Text,
TextInput
} from 'grommet'
import { Schedule } from 'grommet-icons'

class GoalsForm extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            goal: '',
            goalReason: '',
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

    receivingInput = date => {

        const endDate = moment(date)
        const formatDate = endDate.format('D MMMM YYYY')

        this.setState({
            endDate: endDate,
            formatDate: formatDate,
            layerShow: false,
        });
    }

    submitForm = () => {

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {

        const ScheduleLayer = ({ onClose }) => (
          <Layer position='top' onClickOutside={onClose}>
            <Box pad='large' gap='medium'>
              <Box direction='row' gap='medium' align='center'>
                  <Calendar
                    receiveHandler={this.receivingInput}
                    />
              </Box>
            </Box>
          </Layer>
        )

        const { goal, goalReason } = this.state;
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
                <Box
                gap="small"
                margin="small"
                >
                <Heading
                level={3}
                >Add New Goal
                </Heading>

                    <FormField
                    label="What do you want to accomplish?"
                    >
                        <TextInput
                        name="goal"
                        placeholder="Lose 5kg"
                        value={goal}
                        onChange={this.handleChange}
                        required={true}
                        />
                    </FormField>

                    <FormField
                    label="Why do you want to achieve this goal?"
                    >
                        <TextInput
                        name="goalReason"
                        placeholder="To look good in vacay pics"
                        value={goalReason}
                        onChange={this.handleChange}
                        required={true}
                        />
                    </FormField>

                    <Button
                    icon={<Schedule />}
                    color="brand"
                    size="small"
                    label="Select End Date"
                    onClick={() => this.setState({
                    layerShow: (layerShow ? false : true),
                    })}
                    />

                    <Box
                    direction="row"
                    >
                        <Text
                        size="small"
                        color="neutral-2"
                        margin={{ right: "xsmall" }}
                        >
                            Goal End Date:
                        </Text>

                        <Text
                        size="small"
                        color="dark-1">
                            {this.state.formatDate}
                        </Text>
                    </Box>

                    <Button primary
                    type="submit"
                    label="Submit"
                    onClick={this.submitForm}
                    />
                {layer}
                </Box>
            </Form>
        );
    }
}

export default GoalsForm