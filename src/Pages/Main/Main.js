import React, { Component } from 'react';
import Filter from '../Main/Filter/Filter';
import MainSlide from './MainSlide/MainSlide';
import Busan from './mainData';
import Nav from '../../Component/Nav/Nav';
import './Main.scss';
import Footer from '../../Component/Footer/Footer';

class Main extends Component {
  state = {
    num: 0,
    img: [],
  };

  componentDidMount() {
    // 1. 화면 슬라이드
    setInterval(() => {
      const { num } = this.state;
      this.setState({ num: num + 1 > 3 ? 0 : num + 1 });
    }, 3000);
  }

  render() {
    const { num } = this.state;
    return (
      <>
        <Nav />
        <div
          className="slideBox"
          style={{ backgroundImage: `url("${Busan[num].img}")` }}
        >
          <div className="slideSearch">
            <p>부산의 명소를 검색해보세요.</p>
            <div className="searchBox">
              <i className="fas fa-search" />
              <input
                className="searchInput"
                type="text"
                placeholder="액티비티 또는 지역명으로 검색하세요"
              />
            </div>
          </div>
        </div>
        <Filter />
        <MainSlide />
        <Footer />
      </>
    );
  }
}
export default Main;
