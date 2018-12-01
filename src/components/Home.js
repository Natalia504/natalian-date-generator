import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from './common/TextField';
import ControlledOpenSelect from './common/Select';
import SimpleCard from './common/Card';


const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const budgetOptions = [{value: 1, display:'$'}, {value: 2, display: '$$'}, { value:3,  display:'$$$'}];
const timeOptions = [{value: 4, display: '4pm'}, {value: 5, display:'5pm'}, {value: 6, display: '6pm'}, {value: 7, display: '7pm'}];

function getSteps() {
  return ['What\'s your location?', 'What\'s your budget?', 'What time do you want to start?'];
}

function getStepContent(stepIndex, handleChange) {

  switch (stepIndex) {
    case 0:
      return  <TextField handleChange={handleChange} name='location'/>;
    case 1:
      return <ControlledOpenSelect handleChange={handleChange} options={budgetOptions} name='price' label='Budget' />;
    case 2:
      return <ControlledOpenSelect handleChange={handleChange} options={timeOptions} name='start' label='Time' />;

    default:
      return 'Uknown stepIndex';
  }
}

class Home extends React.Component {
  state = {
    activeStep: 0,
    price:'',
    start: '',
    location:'',
    things:[],
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    // console.log(this.state, "state");

    return (
      <div className={classes.root} >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <SimpleCard
                location={this.state.location}
                price={this.state.price}
                start={this.state.start}
              />
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep, this.handleChange)}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Home);
