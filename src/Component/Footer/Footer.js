import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Footers from './img/footer.jpg';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div>
        <img className="footerImg" src={Footers} alt="이미지 입니다" />
      </div>
    );
  }
}

export default withRouter(Footer);
