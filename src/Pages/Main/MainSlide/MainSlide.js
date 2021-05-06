import React, { Component } from 'react';
import '../MainSlide/MainSlide.scss';

class MainSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSlideData: [],
      x: 0,
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
  }

  nextButton = () => {
    const { x } = this.state;

    this.setState({ x: x - 180 }, () => {
      console.log(this.state.x);
    });
  };

  render() {
    const { x } = this.state;

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
            {console.log({ x })}
            <div className="mainImgContainer">
              <i
                class="fas fa-chevron-circle-right"
                onClick={this.nextButton}
              />
              {this.state.mainSlideData.map(ele => {
                return (
                  <>
                    <div
                      className="mainImg"
                      style={{ transform: `translateX(${x}px)` }}
                      key={ele.id}
                    >
                      <img
                        className="imgDetail"
                        src={ele.img}
                        alt="detailImage"
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

export default MainSlide;
