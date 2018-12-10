import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import Navigator from './components/Navigator'
import reducer from './redux/reducer'
import { persistStore } from 'redux-persist'

const store = createStore(reducer, applyMiddleware(logger))
persistStore(
  store,
  null,
  () => {
    store.getState() // if you want to get restoredState
  }
)


export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
