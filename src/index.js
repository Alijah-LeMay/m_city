import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { firebase } from './firebase';

const App = (props) => {
  return (
    <BrowserRouter>
      <StyleRoot>
        <Routes {...props} />
      </StyleRoot>
    </BrowserRouter>
  );
};

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(<App user={user} />, document.getElementById('root'));
});
