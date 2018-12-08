import axios from 'axios';
import endpoint from './endpoint';

export default (token, adminId, newType) => {
  return new Promise((resolve, reject) => {
    axios.put(endpoint + '/admin/api/adminType', {
      'accessToken': token,
      'adminId': adminId,
      'newType': newType
    }).then(res => {
      if (res.status === 200) {
        resolve();
      }
    }).catch(err => reject(err));
  });
};