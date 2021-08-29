import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from '../cart/cartIcon';
import classes from './headerCartButton.module.css';

const HeaderCartIcon = (props) => {
    const ctx = useContext(CartContext);
    const totalItems = ctx.items.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    useEffect(() => {
        if (ctx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() =>{
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [ctx.items]);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    return (
        <button className={btnClasses} onClick={props.onShowCartHandler.bind(this, true)}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    )
}

export default HeaderCartIcon;