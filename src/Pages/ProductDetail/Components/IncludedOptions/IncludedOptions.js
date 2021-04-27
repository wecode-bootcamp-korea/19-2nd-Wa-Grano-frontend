import React, { Component } from 'react';
import '../IncludedOptions/IncludedOptions.scss';

export class IncludedOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrHide: false,
    };
  }
  showOrHide = () => {
    const { showOrHide } = this.state;
    this.setState({
      showOrHide: !showOrHide,
    });
  };
  render() {
    return (
      <div className="includedOptions">
        <div className="innerWrap">
          <b>상품옵션</b>
          <div className="option">
            <p>스카이라운지 브런치 식사권 (2인)</p>
            <button onClick={this.showOrHide}>^</button>
          </div>
          <div
            className={
              this.state.showOrHide ? 'optionDetail' : 'hide_optionDetail'
            }
          >
            <p>2인 기준</p>
            <pre>
              소믈리에 선정 이탈리아 스파클링 와인 '프로세코' 1잔 웰컴 드링크
              <br /> 켄트 브레드와 가든 샐러드로 구성된 2단 플레터 메인메뉴 2종
              선택
              <br /> <br /> - 파스타: 씨푸드 토마토 파스타 or
              <br /> 씨푸드 머쉬룸 고르곤졸라 파스타 or
              <br /> 씨푸드 로제 파스타 or
              <br /> 알리오 올리오 <br /> <br /> - 리조또 : 씨푸드 토마토 리조또
              or <br />
              씨푸드 크림 리조또 or <br /> 씨푸드 로제 리조또
              <br /> <br /> - 치아바타 샌드위치
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default IncludedOptions;
