import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {createLogger} from 'redux-logger'
import rootReducer from './reducers'


//TODO: ver que hacer con este initialState que no se esta usando.. 
const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,

  isLoadingPage: true,
  isLoadingMoreContent: false,
  isPlayerOpen: false,
  channel: null,
}

const loggerMiddleware = createLogger()

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware, // nos permite despachar funciones
      loggerMiddleware // buen middleware que registra las acciones
    ))
  )
}
