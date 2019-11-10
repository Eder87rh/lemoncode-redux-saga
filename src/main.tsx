import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NumberViewerContainer, NumberSetterContainer } from './components';
import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import { store } from './store';


ReactDOM.render(
  <Provider store={store}>
    <>
      <NumberSetterContainer />
      <NumberViewerContainer />
    </>
  </Provider>,
  document.getElementById('root')
);
