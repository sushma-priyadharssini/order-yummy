import React, { useContext, useState } from 'react';
import Modal from '../ui/modal';
import CartContext from '../../store/cart-context';
import CartItem from './cartItem';
import classes from './cart.module.css';
import Checkout from './checkout';

const Cart = (props) =>{
    const ctx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const addItemHandler = (item) => {
        ctx.addItem({...item, amount: 1});
    }
    const removeItemHandler = (itemId) => {
        ctx.removeItem(itemId);
    }

    const orderHanlder = () => {
        setIsCheckout(true);
    }

    const onSubmitHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-test-68f18-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: ctx.items
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // clear cart
        setIsSubmitting(false);
        setDidSubmit(true);
        ctx.clearCart();
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

    const cartModalContent = <React.Fragment>
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{`Rs. ${ctx.total.toFixed(2)}`}</span>
        </div>
        { isCheckout &&
            <Checkout onCancel={props.cartHandler.bind(this, false)}
                    onConfirm={onSubmitHandler}/> 
        }
        { !isCheckout && <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.cartHandler.bind(this, false)}>Close</button>
            {!!ctx.items.length && <button className={classes.button} onClick={orderHanlder}>Order</button>}
        </div> }
    </React.Fragment>

    const isSubmittingContent = <p>Order in process...</p>;

    const didSubmitContent = <React.Fragment>
        <p>Order Placed!</p>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.cartHandler.bind(this, false)}>Close</button>
        </div>
    </React.Fragment>

    return (
        <Modal onClose={props.cartHandler}>
            {!didSubmit && !isSubmitting && cartModalContent}
            {isSubmitting && isSubmittingContent}
            {!isSubmitting && didSubmit && didSubmitContent}
        </Modal>
    )
}

export default Cart;