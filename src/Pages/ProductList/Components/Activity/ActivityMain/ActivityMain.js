import React, { Component } from 'react';
import ActivityMainList from './ActivityMainList/ActivityMainList';

class ActivityMain extends Component {
  render() {
    const { activityList, handleIdx } = this.props;
    return (
      <section className="activityCardList">
        {activityList.map(card => (
          <ActivityMainList key={card.id} card={card} />
        ))}
        <div className="activityLinkBox">
          <span onClick={() => handleIdx(1)}>1</span>
          <span onClick={() => handleIdx(2)}>2</span>
          <span onClick={() => handleIdx(3)}>3</span>
          <span onClick={() => handleIdx(4)}>4</span>
          <span onClick={() => handleIdx(5)}>5</span>
          <span onClick={() => handleIdx(6)}>6</span>
        </div>
      </section>
    );
  }
}

export default ActivityMain;
