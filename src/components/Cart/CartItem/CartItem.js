import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { connect, useDispatch } from "react-redux";
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";
import useStyles from './styles';

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <Grid className={styles.cartItem + "container"}>
      <img
        className={styles.cartItem__image}
        src={item.img}
        alt={item.name}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.name}</p>
        <p className={styles.details__desc}>{item.desc}</p>
        <p className={styles.details__price}>{item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <div className={classes.buttons}>
              <Button stype="button" size="small" onClick={() => adjustQty(item.id, item.qty-1)}>-</Button>
              <Typography>{item.qty}</Typography>
              <Button stype="button" size="small" onClick={() => adjustQty(item.id, item.qty+1)}>+</Button>
          </div>
          
        </div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);