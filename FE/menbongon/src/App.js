// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import Home from './pages/Home.js';
// import Login from './pages/Login.js';
// import Signin from './pages/Signin.js';

// class App extends Component {
//   render(){
//      return (
//       <div>
//         <Route exact path="/" component={Home}/>
//         <Route path="/login" component={Login}/>
//         <Route path="/signin" component={Signin}/>
//       </div>
//     );
//   }
 
// }

// export default App;

import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signin from './pages/Signin.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/singin" component={Signin} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
