import React from "react";
import CartIcon from '../cart/cartIcon';
import classes from './headerCartButton.module.css';

const HeaderCartIcon = (props) => {
    return (
        <button className={classes.button} onClick={props.onShowCartHandler.bind(this, true)}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>2</span>
        </button>
    )
}

export default HeaderCartIcon;