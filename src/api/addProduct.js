import axios from 'axios';
import endpoint from './endpoint';

export default (token, product) => {
  return new Promise((resolve, reject) => {
    axios.post(endpoint + '/admin/api/product', {
      'accessToken': token,
      'productName': product.productName,
      'category': product.category,
      'productPrice': product.productPrice,
      'productDescription': product.productDescription,
      'amountLeft': product.amountLeft,
      'imgUrl': product.imgUrl
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data);
      }
    }).catch(err => reject(err));
  });
};