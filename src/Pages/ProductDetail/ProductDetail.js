import React, { Component } from 'react';
import Photos from './Components/Photos/Photos';
import Description from './Components/Description/Description';
import Nav from '../../Component/Nav/Nav';
import '../ProductDetail/ProductDetail.scss';
import '../../Styles/common.scss';
import '../../Styles/reset.scss';

class ProductDetail extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <Nav />
        <div className="productDetail">
          <Photos />
          <Description />
        </div>
      </>
    );
  }
}

export default ProductDetail;
