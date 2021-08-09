import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Redux
import { connect, useDispatch } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.img}
        alt={product.name}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.name}</p>
        <p className={styles.details__desc}>{product.desc}</p>
        <p className={styles.details__price}>Rp {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <button
          onClick={() => dispatch(addToCart(product.id))}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);