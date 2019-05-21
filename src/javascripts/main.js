import firebase from 'firebase/app';
import '../styles/main.scss';
import auth from './components/auth';

import apiKeys from './helpers/apiKeys.json';

import birf from './components/birfday';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.domStringBuilder();
  birf.domStringBuilder();
};

init();
