import React, { Component } from 'react';
import CategoriList from './CategoriList/CategoriList';

const CATEGORILIST = [
  {
    id: 1,
    text: '액티비티 & 체험',
  },
  {
    id: 2,
    text: '레스토랑 & 다이닝',
    menu: [],
  },
  {
    id: 3,
    text: '어트랙션 & 공연',
    menu: [],
  },
  {
    id: 4,
    text: '교통수단',
    menu: [],
  },
  {
    id: 5,
    text: '현지투어',
    menu: [],
  },
  {
    id: 6,
    text: '스파 & 라운지',
    menu: [],
  },
  {
    id: 7,
    text: '유심 & 와이파이',
    menu: [],
  },
  {
    id: 8,
    text: '에어텔 & 패키지',
    menu: [],
  },
];

class ActivityTap extends Component {
  state = {
    isActive: '',
    minPrice: 0,
    maxPrice: 0,
    isCategoryClick: Array(CATEGORILIST.length).fill(false),
  };

  handleCheck = index => {
    const { isCategoryClick } = this.state;
    const newArr = [...isCategoryClick];
    newArr[index] = !newArr[index];

    this.setState({
      isCategoryClick: newArr,
    });
  };

  handleResetBtn = () => {
    this.setState({ isCategoryClick: Array(CATEGORILIST.length).fill(false) });
  };

  render() {
    const { isActiveBtn, handleChange } = this.props;
    const { minPrice, maxPrice } = this.state;
    return (
      <aside className="activityTap">
        <article className="tabBoxOne">
          <h1>이용일</h1>
          <div className="dailyBoxes">
            <div className="Box">
              <span>오늘</span>
            </div>
            <div className="Box">
              <span>내일</span>
            </div>
            <div className="Box">
              <span>선택</span>
            </div>
          </div>
          {/* 1-1. 필터 기능 */}
          <div className="filterBox">
            <h2>⚡️ 바로 사용</h2>
            <div
              className={`switchBtn ${isActiveBtn ? 'active' : ''}`}
              onClick={handleChange}
            >
              <div
                className={`switchToggle ${isActiveBtn ? 'active' : ''}`}
              ></div>
            </div>
          </div>
        </article>
        <article className="tabBoxTwo">
          <h1>가격</h1>
          <div className="priceBox">
            <span>
              ₩ {minPrice} - ₩ {maxPrice}
            </span>
          </div>
          <div className="priceFixLine">
            <div className="moveToggleLine"></div>
            <div className="moveToggle" onMouseMove={this.handleChangeBtn}>
              <div className="moveToggleLeft"></div>
              <div className="moveToggleRight"></div>
            </div>
          </div>
        </article>
        <article className="tabBoxThree">
          <h1>카테고리</h1>
          {CATEGORILIST.map((categori, index) => {
            return (
              <CategoriList
                key={categori.id}
                index={index}
                text={categori.text}
                handleCheck={this.handleCheck}
                isClicked={this.state.isCategoryClick[index]}
              />
            );
          })}
        </article>
        <article className="tabBoxFour">
          <span onClick={this.handleResetBtn}>초기화</span>
        </article>
      </aside>
    );
  }
}

export default ActivityTap;
