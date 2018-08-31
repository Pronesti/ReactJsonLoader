import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
    apiKey: "AIzaSyDznQO8NYPPk1SEWoFh1PPW885KkHrIsKQ",
    authDomain: "example-b3eeb.firebaseapp.com",
    databaseURL: "https://example-b3eeb.firebaseio.com",
    projectId: "example-b3eeb",
    storageBucket: "example-b3eeb.appspot.com",
    messagingSenderId: "676311520064"
  };
  
  firebase.initializeApp(config);
  

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

