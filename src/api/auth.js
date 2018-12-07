import axios from 'axios';
import endpoint from './endpoint';

export default ({ login, password }) => {
  return new Promise((resolve, reject) => {
    axios.post(endpoint + '/admin/api/auth', {
      'login': login,
      'password': password
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data);
      }
    }).catch(err => reject(err));
  });
};