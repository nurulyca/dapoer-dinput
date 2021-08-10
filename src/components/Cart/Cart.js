import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import { connect, useSelector } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const carts = useSelector(state => state.shop.cart)

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      console.log(cart)
      items += item.qty;
      price += item.qty * item.price;
    })

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <div className={styles.cart + "container col-sm-12"}>
      <Grid container spacing={3}>
        {carts.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>Rp {totalPrice}</span>
        </div>
        <Link to={{pathname: "/payment"}}>
          <button className={styles.summary__checkoutBtn}>
            Proceed To Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);