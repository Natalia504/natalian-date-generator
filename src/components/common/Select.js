import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});


class ControlledOpenSelect extends React.Component {

  render() {
    const { classes, handleChange } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">{this.props.label}</InputLabel>
          <Select
            value={this.props.options}
            onChange={handleChange}
            name={this.props.name}
            id='demo-controlled-open-select'
          >
            {this.props.options.map((option, index) => {
              return <MenuItem key={index} value={option.value}>{option.display}</MenuItem>
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
