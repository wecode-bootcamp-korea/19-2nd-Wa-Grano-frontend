import React, { Component } from 'react';
import Card from '../CardList/Card/Card';

class CardList extends Component {
  state = {
    restaurants: [],
    recomendations: [],
    busanHotels: [],
    move: 0,
    move1: 0,
    move2: 0,
  };

  componentDidMount() {
    const urls = [
      'http://localhost:3000/data/productListData1.json',
      'http://localhost:3000/data/productListData2.json',
      'http://localhost:3000/data/productListData3.json',
    ];
    const requests = urls.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(response =>
        this.setState({
          restaurants: response[0],
          recomendations: response[1],
          busanHotels: response[2],
        })
      );
  }

  // 카드리스트 컴포넌트 이벤트
  goLeft = num => {
    const { move, move1, move2 } = this.state;
    if (num === 1) this.setState({ move: move + 100 });
    if (num === 2) this.setState({ move1: move1 + 100 });
    if (num === 3) this.setState({ move2: move2 + 100 });
  };

  goRight = num => {
    const { move, move1, move2 } = this.state;
    if (num === 1) this.setState({ move: move - 100 });
    if (num === 2) this.setState({ move1: move1 - 100 });
    if (num === 3) this.setState({ move2: move2 - 100 });
  };

  render() {
    const {
      restaurants,
      recomendations,
      busanHotels,
      move,
      move1,
      move2,
    } = this.state;
    return (
      <>
        <section className="cardLists">
          <article className="cardList">
            <header>레스토랑도 할인 받으세요.</header>
            <div className="cardListBox">
              {restaurants.map(card => (
                <Card key={card.id} card={card} move={move} />
              ))}
            </div>
          </article>
          <div className={`swiperleftBtn ${move === 0 ? 'hidden' : ''}`}>
            <span onClick={() => this.goLeft(1)}>🌸</span>
          </div>
          <div className={`swiperRightBtn ${move < -1600 ? 'hidden' : ''}`}>
            <span onClick={() => this.goRight(1)}>🌸</span>
          </div>
        </section>
        <section className="cardLists">
          <article className="cardList">
            <header>여기는 꼭 가보세요.</header>
            <div className="cardListBox">
              {recomendations.map(card => (
                <Card key={card.id} card={card} move={move1} />
              ))}
            </div>
          </article>
          <div className={`swiperleftBtn ${move1 === 0 ? 'hidden' : ''}`}>
            <span onClick={() => this.goLeft(2)}>🌸</span>
          </div>
          <div className={`swiperRightBtn ${move1 < -500 ? 'hidden' : ''}`}>
            <span onClick={() => this.goRight(2)}>🌸</span>
          </div>
        </section>
        <section className="cardLists">
          <article className="cardList">
            <header>부산 인기 숙소</header>
            <div className="cardListBox">
              {busanHotels.map(card => (
                <Card key={card.id} card={card} move={move2} />
              ))}
            </div>
          </article>
          <div className={`swiperleftBtn ${move2 === 0 ? 'hidden' : ''}`}>
            <span onClick={() => this.goLeft(3)}>🌸</span>
          </div>
          <div className={`swiperRightBtn ${move2 < -2100 ? 'hidden' : ''}`}>
            <span onClick={() => this.goRight(3)}>🌸</span>
          </div>
        </section>
      </>
    );
  }
}

export default CardList;
