import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../src/Pages/Main/Main';
import Filter from '../src/Pages/Main/Filter/Filter';
import SignUp from '../src/Pages/SignUp/SignUp';
import Login from '../src/Pages/Login/Login';
import ProductList from '../src/Pages/ProductList/ProductList';
import Nav from '../src/Component/Nav/Nav';
import ProductDetail from '../src/Pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/main/filter" component={Filter} />
          <Route exact path="/main/filter/:id" component={Filter} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/nav" component={Nav} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
