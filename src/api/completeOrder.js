import axios from 'axios';
import endpoint from './endpoint';

export default (token, adminId, orderId) => {
  return new Promise((resolve, reject) => {
    axios.put(endpoint + '/admin/api/order/complete', {
      'accessToken': token,
      'adminId': adminId,
      'orderId': orderId
    }).then(res => {
      if (res.status === 200 || res.status === 409) {
        resolve(res.data);
      }
    }).catch(err => reject(err));
  });
};