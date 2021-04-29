import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import circleImg from './FilterData';
import '../Filter/Filter.scss';

class Filter extends Component {
  goToDetail = e => {
    this.props.history.push(`/main/filter/${e.target.id}`);
  };

  render() {
    return (
      <div className="pcContainer">
        <div className="itemContainer">
          {circleImg.map(ele => {
            return (
              <div
                key={ele.id}
                id={ele.id}
                className="itemCircle"
                onClick={this.goToDetail}
              >
                <div className="circle">
                  <img
                    className="categoryIcon"
                    src={ele.img}
                    alt="circleImage"
                  />
                  {ele.point && (
                    <img className="point" src={ele.point} alt="pointImage" />
                  )}
                </div>
                <div className="categoryName">{ele.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Filter);
