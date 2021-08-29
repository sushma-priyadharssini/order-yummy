import Modal from '../ui/modal';
import classes from './cart.module.css';

const Cart = (props) =>{
    const cartItems = [{ id: 1, name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
    ));
    return (
        <Modal onClose={props.cartHandler}>
            <ul className={classes['cart-items']}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>50.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.cartHandler.bind(this, false)}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;