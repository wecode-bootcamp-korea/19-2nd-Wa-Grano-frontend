import React, { Component } from 'react';
import '../Title/Title.scss';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="headerWrap">
          <p>부산 켄트호텔 by 켄싱턴 스카이라운지 브런치</p>
          <button>바 & 나이트라이프</button>
          <button>호텔 레스토랑</button>
        </div>
        <ul>
          <li>24시간 내 확정</li>
          <li>유효기간 내 사용</li>
          <li>문자 MMS</li>
          <li>한국어 제공</li>
          <li>취소 가능</li>
          <li>내일부터 사용 가능</li>
        </ul>
      </div>
    );
  }
}

export default Title;
