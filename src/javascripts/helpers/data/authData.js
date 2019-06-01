import firebase from 'firebase/app';
import 'firebase/auth';
import Birfday from '../../components/Birf/birfday';
import Friends from '../../components/Friends/friends';

const authDiv = document.getElementById('auth');
const birfdayDiv = document.getElementById('birfday');
const birfdayNavbar = document.getElementById('navbar-button-birfday');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.error(user);
    if (user) {
      authDiv.classList.add('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      Birfday.domStringBuilder(user.uid);
      birfdayNavbar.classList.remove('hide');
      birfdayDiv.classList.remove('hide');
      Friends.getFriends(user.uid);
    } else {
      authDiv.classList.remove('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
      birfdayDiv.classList.add('hide');
      birfdayNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
