import axios from 'axios';
import endpoint from './endpoint';

export default (token, adminId, newFirstName, newSurname) => {
  return new Promise((resolve, reject) => {
    axios.put(endpoint + '/admin/api/name', {
      'accessToken': token,
      'adminId': adminId,
      'firstName': newFirstName,
      'lastName': newSurname
    }).then(res => {
      if (res.status === 200) {
        resolve();
      }
    }).catch(err => reject(err));
  });
};