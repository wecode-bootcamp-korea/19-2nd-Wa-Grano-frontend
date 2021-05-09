import React, { Component } from 'react';
import '../MainSlide/MainSlide.scss';
import { withRouter } from 'react-router-dom';
import { API } from '../../../config';

class MainSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSlideData: [],
      x: 0,
      hotPlace: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/MainSlideData.json')
      .then(response => response.json())
      .then(response => {
        this.setState({
          mainSlideData: response,
        });
      });
    // fetch(`${API}/products/destination`)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({ hotPlace: res }, () => {
    //       console.log(this.state.hotPlace);
    //     });
    //   });
    // this.setState.test();
  }

  // test = () => {
  //   fetch(`${API}/products/destination`)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ hotPlace: res }, () => {
  //         console.log(this.state.hotPlace);
  //       });
  //     });
  // };
  // nextButton = () => {
  //   const { x } = this.state;

  //   this.setState({ x: x - 180 }, () => {
  //     console.log(this.state.x);
  //   });
  // };

  goToList = index => {
    if (index === 0) this.props.history.push('/product-list');
  };

  render() {
    // const { test } = this.setState;
    return (
      <div>
        <div className="mainPageContainer">
          <div className="container">
            <div className="mainTitle">
              <div className="mainTitleContainer">
                <div className="topTitle">인기 여행지</div>
                <div className="smallTitle">
                  2021년 가장 핫한 여행지를 추천해요
                </div>
              </div>
            </div>
            <div className="mainImgContainer">
              <i
                class="fas fa-chevron-circle-right"
                onClick={this.nextButton}
              />
              {this.state.mainSlideData.map((ele, index) => {
                return (
                  <>
                    <div
                      className="mainImg"
                      style={{ transform: `translateX(${this.state.x}px)` }}
                      key={ele.id}
                    >
                      <img
                        className="imgDetail"
                        src={ele.img}
                        alt="detailImage"
                        index={index}
                        onClick={() => this.goToList(index)}
                      />
                      <div className="mainText">{ele.text}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainSlide);
