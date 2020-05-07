import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Sidebar from './components/Sidebar';
import Settings from './components/Profile/Settings';
import Notif from './components/Profile/Notif';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { loadUser } from './actions/auth';
import { Provider } from 'react-redux';
import Task1 from './components/Task1';
import Task2 from './components/Task2';

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <PrivateRoute exact path="/notifications" component={Notif} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/task1" component={Task1} />
            <PrivateRoute exact path="/task2" component={Task2} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}
export default App;
