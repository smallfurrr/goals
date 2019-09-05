import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//KIV using grommet box component??

const useStyles = makeStyles({
  card: {
    width: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = props => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const cards = props.goals.map((row, index) => {

        return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" component="p">
              {row.goal}
              <br />
              {row.endDate}
            </Typography>
          </CardContent>
        </Card>
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

export default Goals;