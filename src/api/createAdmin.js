import axios from 'axios';
import endpoint from './endpoint';

export default (token, admin) => {
  return new Promise((resolve, reject) => {
    axios.post(endpoint + '/admin/api/createAdmin', {
      'accessToken': token,
      'firstName': admin.firstName,
      'lastName': admin.lastName,
      'login': admin.login,
      'password': admin.password,
      'type': admin.type,
      'avatar': admin.avatar
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data);
      }
    }).catch(err => reject(err));
  });
};