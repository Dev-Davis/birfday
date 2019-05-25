import axios from 'axios';

import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

export default { addNewFriend };
