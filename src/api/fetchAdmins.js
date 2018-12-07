import axios from 'axios';
import endpoint from './endpoint';

export default accessToken => {
  return new Promise((resolve, reject) => {
    axios.get(endpoint + '/admin/api/getAllAdmins?accessToken=' + accessToken).then(res => {
      if (res.status === 200) {
        resolve(res.data);
      }
    }).catch(err => reject(err));
  });
};