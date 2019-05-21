import firebase from 'firebase/app';
import '../styles/main.scss';
import auth from './components/Auth/auth';

import apiKeys from './helpers/apiKeys.json';

import birf from './components/Birf/birfday';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.domStringBuilder();
  birf.domStringBuilder();
};

init();
