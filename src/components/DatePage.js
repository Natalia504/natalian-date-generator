import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as thingActions from '../actions/thingActions';
import MediaCard from './common/MediaCard';


class DatePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  renderResults = () =>
    this.props.state.things.map((thing, i) => {
      console.log(thing, "one thing");
      return (<MediaCard
        key={i}
        toggle={this.toggleLock}
        isLocked={thing.locked}
      />)
    })


  toggleLock = () => {
    this.setState({isLocked1: !this.state.isLocked1});
  }




  render() {
    console.log(this.props.state, 'state');

    return (
      <div>
        {this.renderResults()}
      </div>
    );
  }
}

DatePage.propTypes = {
  // things: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    things: bindActionCreators(thingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePage);
