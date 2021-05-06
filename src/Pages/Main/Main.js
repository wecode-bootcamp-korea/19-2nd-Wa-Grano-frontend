import React, { Component } from 'react';
import Filter from '../Main/Filter/Filter';

class Main extends Component {
  state = {
    num: 0,
    img: [],
  };

  componentDidMount() {
    setInterval(() => {
      const { num } = this.state;
      this.setState({ num: num + 1 > 3 ? 0 : num + 1 });
    }, 5000);
  }

  render() {
    const { num } = this.state;
    return (
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
    );
  }
}
export default Main;
