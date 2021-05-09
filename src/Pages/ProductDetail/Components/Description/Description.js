import React, { Component } from 'react';
import Title from '../Title/Title';
import OptionDetails from '../OptionDetails/OptionDetails';
import IncludedOptions from '../IncludedOptions/IncludedOptions';
import Regulations from '../Regulations/Regulations';
import Map from '../Map/Map';
import '../Description/Description.scss';

class Description extends Component {
  state = {
    theposition: 'bookBox_black',
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let newBox = '';

    if (window.scrollY >= 800) {
      newBox = 'bookBox_white';
    } else {
      newBox = 'bookBox_black';
    }

    this.setState({ theposition: newBox });
  };

  render() {
    return (
      <div className="description">
        <div className={`bookBox ${this.state.theposition}`}>
          <p>₩ 31,255</p>
          <button>예약하기</button>
        </div>
        <div class="titleWrap">
          <Title />
        </div>
        <IncludedOptions />
        <OptionDetails />
        <Regulations />
        <Map />
      </div>
    );
  }
}

export default Description;
