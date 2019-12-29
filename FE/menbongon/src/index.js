import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
export { default as Home } from './pages/Home';
export { default as Signin } from './pages/Signin';
export { default as Login } from './pages/Login';
export { default as MainPage } from './pages/MainPage';
export { default as MyInfo } from './pages/MyInfo';
export { default as Board } from './pages/Board';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
