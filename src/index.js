import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeContainer  from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import MiniProject from './MiniProject';
import FooterContainer from './containers/FooterContainer';
import {createStore} from 'redux';
import {Provider}  from 'react-redux';
import Root from './services/reducers/index';
import MultiPlicationForm from './MultiplicationForm';
const store = createStore(Root); // it will store the state at single place
// import FirstPage ''


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <HeaderContainer/>
    <HomeContainer />
    <FooterContainer/> */}
    <MiniProject/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
