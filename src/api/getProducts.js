import axios from 'axios';
import endpoint from './endpoint';

export default () => {
  return new Promise((resolve, reject) => {
    axios.get(endpoint + '/api/products').then(res => {
      if (res.status === 200) {
        resolve(res.data);
      }
    }).catch(err => reject(err));
  });
};