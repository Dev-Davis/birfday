import axios from 'axios';
import apiKeys from './apiKeys.json';

// base Url for your database
const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

/* axios.get in this function is getting the firebase database and searching the call by the uid
that's equal to ${uid} so it'll only get that information for that uid. */

// Object.keys(birthdayResults) makes the key the id for the birthdayResults.
// birthdayResults[birthdayId].id = birthdayId which is the input for the forEach method.

// birthdays.push are the birthdays being pushed into the created birthdays array

const getBirfdayByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birthdayResults = results.data;
      const birthdays = [];
      Object.keys(birthdayResults).forEach((birthdayId) => {
        birthdayResults[birthdayId].id = birthdayId;
        birthdays.push(birthdayResults[birthdayId]);
      });
      resolve(birthdays[0]);
    })
    .catch(err => reject(err));
});

export default { getBirfdayByUid };
