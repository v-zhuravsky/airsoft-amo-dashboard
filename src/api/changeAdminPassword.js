import axios from 'axios';
import endpoint from './endpoint';

export default (token, adminId, oldPassword, newPassword) => {
  console.log(token, adminId, oldPassword, newPassword);
  return new Promise((resolve, reject) => {
    axios.put(endpoint + '/admin/api/password', {
      'accessToken': token,
      'adminId': adminId,
      'oldPassword': oldPassword,
      'newPassword': newPassword
    }).then(res => {
      if (res.status === 200) {
        resolve();
      }
    }).catch(err => reject(err));
  });
};