import React, { useState, useEffect } from 'react';
import { Nav, NavLink } from './NavbarElements';
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';


const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const history = useHistory();

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
          count += item.qty;
        });
    
        setCartCount(count);
      }, [cart, cartCount]);

function toCart(e){
    e.preventDefault();
    history.push("/cart");
}

    return (
        <>
            <Nav>
                <NavLink to='/'>Dapoer Dinput</NavLink>
                    <Link to="/cart" style={{display: 'flex', marginLeft: '150px'}}>
                        <div className={styles.navbar__cart}>
                            <img onClick = {(e) => {toCart(e)}}
                                className={styles.cart__image}
                                src="https://image.flaticon.com/icons/png/512/891/891462.png"
                                alt="shopping cart">
                            </img>
                        </div>
                    </Link>
            </Nav>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Navbar);
