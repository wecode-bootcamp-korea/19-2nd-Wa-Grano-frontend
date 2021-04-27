import { Component } from 'react';
import './Social.scss';

export default class Social extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <div className="socialLineBox">
          <hr className="socialBorder" />
          <span className="socialOrText">or</span>
          <hr className="socialBorder" />
        </div>
        {socialData.map((data, idx) => {
          return (
            <div className="snsBox" key={idx}>
              <button className="snsButton">
                <img src={data.img} alt={data.name} />
                <span className="socialbuttonText">{text}</span>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const socialData = [
  {
    name: '페이스북',
    img: '/images/facebook.jpg',
  },
  {
    name: '카카오',
    img: '/images/kakao.jpg',
  },
  {
    name: '네이버',
    img: '/images/naver.jpg',
  },
  {
    name: '구글',
    img: '/images/google.jpg',
  },
];
