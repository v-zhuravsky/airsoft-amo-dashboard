import axios from 'axios';
import endpoint from './endpoint';

export default accessToken => {
  return new Promise((resolve, reject) => {
    axios.post(endpoint + '/admin/api/logout', {
      'accessToken': accessToken
    }).then(res => {
      if (res.status === 200) {
        resolve();
      }
    }).catch(err => reject(err));
  });
};