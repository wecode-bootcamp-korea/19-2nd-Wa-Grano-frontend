import React, { Component } from 'react';
import Photos from './Components/Photos/Photos';
import Description from './Components/Description/Description';
import '../ProductDetail/ProductDetail.scss';
import '../../Styles/common.scss';
import '../../Styles/reset.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetail">
        <Photos />
        <Description />
      </div>
    );
  }
}

export default ProductDetail;
