import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createHashHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

//IMPORTS COMPONENTS
import App from './App';
import ListUsers from './ListUsers'
//REDUX
import { logger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import reducers from './redux/reducers'



const history = createHashHistory()
const routeMiddleware = routerMiddleware(history)
const middlewares = [routeMiddleware]

// if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
// }


  const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
              <Route path="/" exact component={props => <App {...props} />} history={history} />
              <Route path="/list" exact component={props => <ListUsers {...props} />} history={history} />
              {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
