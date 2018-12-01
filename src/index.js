import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import configureStore from './configureStore';

const store = configureStore();
// store.dispatch(loadEvents());

class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              {routes}
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
