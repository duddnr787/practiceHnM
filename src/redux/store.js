import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authenticateReducer from './reducer/authenticateReducer';
import productReducer from './reducer/productReducer';

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
let store = configureStore({
  reducer:{
    auth : authenticateReducer,
    product : productReducer
  },
})

export default store;