import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as thingActions from '../actions/thingActions';
import MediaCard from './common/MediaCard';


class DatePage extends React.Component {

  // renderResults = () => {
  //   this.props.state.map((thing, i) => {
  //     return <Card thing={thing} />
  //   })
  // }

  render() {
    console.log(this.props.state, 'state');

    return (
      <div>
        <MediaCard />
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
