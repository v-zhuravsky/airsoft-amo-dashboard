import axios from 'axios';
import endpoint from './endpoint';

export default (token, adminId, avatar) => {
  return new Promise((resolve, reject) => {
    axios.put(endpoint + '/admin/api/avatar', {
      'accessToken': token,
      'adminId': adminId,
      'avatar': avatar
    }).then(res => {
      if (res.status === 200) {
        resolve();
      }
    }).catch(err => reject(err));
  });
};