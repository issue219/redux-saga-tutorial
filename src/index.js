import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const sagaMiddleware = createSagaMiddleware()

//axios.defaults.withCredentials = true;
//axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';
//axios.defaults.baseURL = 'https://rem.dbwebb.se/api';
axios.defaults.baseURL = 'http://localhost:3005';
//axios.defaults.baseURL = 'https://my-json-server.typicode.com/issue219/fake-api';

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();