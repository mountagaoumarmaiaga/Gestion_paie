// store.js
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from red
import thunk from 'redux-thunk';
import rootReducer from '..';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
