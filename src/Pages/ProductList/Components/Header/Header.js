import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <header>
          <div className="headerContent">
            <h1>부산</h1>
            <div className="weatherBox">
              <img
                className="weatherBoxImg"
                src="https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15785511130077.png"
                alt="날씨 이미지입니다."
              />
              <span className="weatherBoxHeat">16 ℃</span>
              <img
                className="weatherBoxIcon"
                src="https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15766504202262.svg"
                alt="날씨 아이콘 이미지입니다."
              />
            </div>
          </div>
        </header>
      </section>
    );
  }
}

export default Header;
