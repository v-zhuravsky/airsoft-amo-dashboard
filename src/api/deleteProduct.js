import axios from 'axios';
import endpoint from './endpoint';

export default (token, productId) => {
  return new Promise((resolve, reject) => {
    axios.delete(endpoint + '/admin/api/product', {
      data: {
        'accessToken': token,
        'productId': productId
      }
    }).then(res => {
      if (res.status === 200) {
        resolve();
      }
    }).catch(err => reject(err));
  });
};