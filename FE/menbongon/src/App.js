import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signin from './pages/Signin.js';
import MainPage from './pages/MainPage.js';
import MyInfo from './pages/MyInfo.js';
import Board from './pages/Board.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route path="/main" component={MainPage} />
        <Route path="/myinfo" component={MyInfo} />
        <Route path="/board" component={Board} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
