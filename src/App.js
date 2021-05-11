import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import thunk from 'redux-thunk';

import Upload from './components/pages/Upload'
import Gallery from './components/pages/Gallery'
import Navbar from './components/Navbar'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;