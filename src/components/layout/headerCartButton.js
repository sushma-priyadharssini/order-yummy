import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from '../cart/cartIcon';
import classes from './headerCartButton.module.css';

const HeaderCartIcon = (props) => {
    const ctx = useContext(CartContext);
    const totalItems = ctx.items.reduce((acc, item) => {
        return acc + item.amount;
    }, 0)
    return (
        <button className={classes.button} onClick={props.onShowCartHandler.bind(this, true)}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    )
}

export default HeaderCartIcon;