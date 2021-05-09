import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Card extends Component {
  state = {
    isActive: false,
  };

  handleChange = () => {
    const { isActive } = this.state;
    isActive
      ? this.setState({ isActive: false })
      : this.setState({ isActive: true });
  };

  handlefirst = index => {
    if (index === 0) this.props.history.push('/product-detail');
  };

  render() {
    const { card, move, index } = this.props;
    return (
      <div
        className="card"
        style={{ transform: `translateX(${move}px)` }}
        onClick={() => {
          this.handlefirst(index);
        }}
      >
        <img src={card.url} alt="카드 이미지입니다." />
        <div className="cardContent">
          <h1>{card.available}</h1>
          <h2>{card.title}</h2>
          <h3>{card.originalPrice}</h3>
          <h4>{card.price}</h4>
          <img
            className="likeBtn"
            onClick={this.handleChange}
            src={
              this.state.isActive
                ? 'https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15653296786777.svg'
                : 'https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15653295914590.svg'
            }
            alt="하트 이미지로 된 비활성 아이콘입니다."
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
