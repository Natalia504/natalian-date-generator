import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Navigation from './components/Navigation';
import App from './components/App';
// import SampleReduxContainer from './components/SampleReduxContainer';

export default (
  <div>
    {/* <Navigation /> */}
    <div>
      <Switch>
        <Route exact path={'/'} component={App} />
        {/* <Route path={'/redux'} component={SampleReduxContainer} /> */}
      </Switch>
    </div>
  </div>
);
