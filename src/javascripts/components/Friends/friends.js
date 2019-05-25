import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';

import friendsData from '../../helpers/data/friendsData';

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birfday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(err => console.error('no new friends for you', err));
  console.error(newFriend);
};

const newFriendBtn = () => {
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = () => {
  const domString = '<button id="id-friend-btn" class="btn btn-success">Add Friend</button>';
  util.printToDom('friends', domString);
  document.getElementById('id-friend-btn').addEventListener('click', newFriendBtn);
};

export default { showFriends };
