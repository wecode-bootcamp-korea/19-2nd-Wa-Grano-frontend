import React, { Component } from 'react';

class Banner extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    setInterval(() => this.changeBanner(), 3000);
  }

  changeBanner = () => {
    const { index } = this.state;
    if (index < 5) this.setState({ index: index + 1 });
    if (index >= 5) this.setState({ index: 0 });
  };

  render() {
    const { index } = this.state;
    return (
      <section className="banner">
        <div className="bannerContent">
          <img
            className="bannerContent"
            src={BANNER[index]}
            alt="광고 배너 이미지입니다."
          />
        </div>
      </section>
    );
  }
}
export default Banner;

const BANNER = [
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2020/04/27/15879807176618.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/04/19/16188201485468.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/04/29/16196775741784.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/04/28/16195934194618.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/02/26/16143034313922.png`,
  `https://d2mgzmtdeipcjp.cloudfront.net/files/banner/2021/03/02/16146723605470.png`,
];
