import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';

import friendsData from '../../helpers/data/friendsData';

// Run the getFriends function inside the then statement with the uid

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
      getFriends(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no new friends for you', err));
  console.error(newFriend);
};

const newFriendBtn = () => {
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = (friends) => {
  let domString = '<button id="id-friend-btn" class="btn btn-success">Add Friend</button>';
  friends.forEach((friend) => {
    domString += `<h3>${friend.name}</h3>`;
  });
  util.printToDom('friends', domString);
  document.getElementById('id-friend-btn').addEventListener('click', newFriendBtn);
};

// Create a new friend function

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      console.error('friends array", friends');
      showFriends(friends);
    })
    .catch(err => console.error('no friends', err));
};


export default { getFriends };