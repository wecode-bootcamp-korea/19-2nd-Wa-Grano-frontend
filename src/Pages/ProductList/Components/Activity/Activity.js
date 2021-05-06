import React, { Component } from 'react';
import ActivityMain from './ActivityMain/ActivityMain';
import ActivityTap from './ActivityTap/ActivityTap';

class Activity extends Component {
  state = {
    isActive: false,
    isActiveToggle: false,
    activityList: [],
    data: {},
    id: 0,
  };

  handleChange = () => {
    const { isActive } = this.state;
    isActive
      ? this.setState({ isActive: false })
      : this.setState({ isActive: true });
  };

  handleChangeToggle = () => {
    const { isActiveToggle } = this.state;
    isActiveToggle
      ? this.setState({ isActiveToggle: false })
      : this.setState({ isActiveToggle: true });
  };

  handleIdx = idx => {
    this.setState({ id: idx });
  };

  componentDidMount() {
    fetch(`http://localhost:3000/data/photos/limit=9&offset=1.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({ activityList: data });
      });
  }

  componentDidUpdate() {
    const { id } = this.state;
    fetch(`http://localhost:3000/data/photos/limit=9&offset=${id}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({ activityList: data });
      });
  }

  render() {
    const { isActive, isActiveToggle, activityList } = this.state;
    return (
      <>
        <section className="cardLists">
          <article className="activityList">
            <header>{`부산 액티비티 (${activityList.length})`}</header>
            <div className="cardListLine"></div>
            <div className="activityMenu">
              <span onClick={this.handleChange}>
                WAUG 추천순 {isActive ? '⋁' : '⋀'}
              </span>
            </div>
            <div className="activityBox">
              <ActivityTap
                isActiveToggle={isActiveToggle}
                handleChangeToggle={this.handleChangeToggle}
              />
              <ActivityMain
                activityList={activityList}
                handleIdx={this.handleIdx}
              />
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default Activity;
