import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyC1l6yA-wb_dE2zytY_l9YC4Bl0VMlPsH0',
  authDomain: 'm-city-7874a.firebaseapp.com',
  //auth domain you get when deploying the app
  databaseURL: 'https://react-lesson-matches.firebaseio.com/',
  projectId: 'react-lesson-matches',
  storageBucket: 'gs://react-lesson-matches.appspot.com/',
  //senderId found in project settings, cloud messaging
  messagingSenderId: '813737963740',
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB,
};
