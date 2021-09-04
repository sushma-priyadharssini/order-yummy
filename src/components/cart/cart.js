import React, { useContext, useState } from 'react';
import Modal from '../ui/modal';
import CartContext from '../../store/cart-context';
import CartItem from './cartItem';
import classes from './cart.module.css';
import Checkout from './checkout';

const Cart = (props) =>{
    const ctx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);

    const addItemHandler = (item) => {
        ctx.addItem({...item, amount: 1});
    }
    const removeItemHandler = (itemId) => {
        ctx.removeItem(itemId);
    }

    const orderHanlder = () => {
        setIsCheckout(true);
    }

    const cartItems = ctx.items.map(item => (
        <CartItem 
            key={item.id}
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={removeItemHandler.bind(this, item.id)}
            onAdd={addItemHandler.bind(this, item)}>
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
            { isCheckout && <Checkout onCancel={props.cartHandler.bind(this, false)} /> }
            { !isCheckout && <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.cartHandler.bind(this, false)}>Close</button>
                {!!ctx.items.length && <button className={classes.button} onClick={orderHanlder}>Order</button>}
            </div> }
        </Modal>
    )
}

export default Cart;