import React, { useContext } from 'react';
import Modal from '../ui/modal';
import CartContext from '../../store/cart-context';
import CartItem from './cartItem';
import classes from './cart.module.css';

const Cart = (props) =>{
    const ctx = useContext(CartContext);
    const addItemHandler = () => {}
    const removeItemHandler = () => {}
    const cartItems = ctx.items.map(item => (
        <CartItem 
            key={item.id}
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={removeItemHandler}
            onAdd={addItemHandler}>
            {item.name}
        </CartItem>
    ));
    return (
        <Modal onClose={props.cartHandler}>
            <ul className={classes['cart-items']}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`Rs. ${ctx.total.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.cartHandler.bind(this, false)}>Close</button>
                {!!ctx.items.length && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;