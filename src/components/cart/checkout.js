import classes from './checkout.module.css';
import React from 'react'; 

const Checkout = (props) => {

    const confirmHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type='text' id="name" value='' />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type='text' id="street" value='' />
            </div>
            <div className={classes.control}>
                <label htmlFor="postalCode">Postal Code</label>
                <input type='text' id="postalCode" value='' />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type='text' id="city" value='' />
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit' className={classes.submit}>Confirm</button>
            </div>
            
        </form>
    )
}

export default Checkout;