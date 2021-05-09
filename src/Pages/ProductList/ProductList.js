import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import CardList from './Components/CardList/CardList';
import Activity from './Components/Activity/Activity';
import Nav from '../../Component/Nav/Nav';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <main>
        <Nav />
        <Header />
        <Banner />
        <CardList />
        <Activity />
      </main>
    );
  }
}

export default ProductList;
