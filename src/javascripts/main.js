import firebase from 'firebase/app';
import '../styles/main.scss';

import auth from './components/Auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.navbarEvents();
  auth.domStringBuilder();
  authData.checkLoginStatus();
};

init();
