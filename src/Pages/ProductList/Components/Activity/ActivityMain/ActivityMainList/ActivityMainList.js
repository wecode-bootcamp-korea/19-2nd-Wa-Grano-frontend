import React, { Component } from 'react';

class ActivityMainList extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className="activityCard">
        <img src={card.url} alt="카드 이미지입니다." />
        <div className="activityContent">
          <h1>{card.available}</h1>
          <h2>{card.title}</h2>
          <h3>{card.originalPrice}</h3>
          <h4>{card.price}</h4>
        </div>
      </div>
    );
  }
}

export default ActivityMainList;
