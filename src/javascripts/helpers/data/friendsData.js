import axios from 'axios';

import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResults = results.data;
      const friends = [];
      Object.keys(friendResults).forEach((friendId) => {
        friendResults[friendId].id = friendId;
        friends.push(friendResults[friendId]);
      });
      resolve(friends);
    })
    .catch(err => reject(err));
});

/* make a new friend variable, do an axios call to the firebase database to return the friend object
and the friendObject is the friend input of the new friend being added */

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

export default { getFriendsByUid, addNewFriend };
