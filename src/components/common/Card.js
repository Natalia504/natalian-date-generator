import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    minWidth: 150,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes, location, price, start } = props;

  const renderDisplay = (value) => {
    switch (value) {
      case 1:
        return '$'
      case 2:
        return "$$"
      case 3:
        return "$$$"
      case 4:
        return "4PM"
      case 5:
        return "5PM"
      case 6:
        return "6PM"
      case 7:
        return "7PM"
      default:
        return 'Uknown';
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">
          You are in <strong>{location}</strong>.
        </Typography>
        <Typography variant="h5">
          Your budget is <strong>{renderDisplay(price)}</strong>.
        </Typography>
        <Typography variant="h5">
          You would like to start at <strong>{renderDisplay(start)}</strong>.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
          Generate
        </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
