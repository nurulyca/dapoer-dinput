import React from 'react';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./components/Cart/Cart";
import { UserForm } from './components/Payment/UserForm';
import ScrollToTop from './components/Scroll/Scroll';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route exact path={"/"}>
        <Home/>
        </Route>
        <Route path="/cart" component={Cart}/>
        <Route path="/payment" component={UserForm}/>
      </Switch>
    </Router> 
  );
}

const Home = () => {
  return(
    <>
      <Hero />
      <Products heading="Fluffy and Sweetness for You" data={productData}/>
      <Feature />
      <Products heading="The Moments Full of Joy" data={productDataTwo}/>
    </>
  )}
 
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
