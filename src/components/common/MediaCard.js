import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;

  let isLocked=false;
  const toggleLock = () => {
    return isLocked = !isLocked;
  }

  return (
    <div style={{margin: '40px'}}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Site img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              First site Name
            </Typography>
            <Typography component="p">
              The description of the site here
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={this.toggleLock} variant="contained" color="primary" className={classes.button}>
            Locked
          </Button>
          <Button onClick={this.toggleLock} variant="contained" color="primary" className={classes.button}>
            Lock
          </Button>
        </CardActions>
      </Card>
      <div style={{margin: '10px'}}>
        <Button size="small" color="primary">
          Try Again
        </Button>
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
