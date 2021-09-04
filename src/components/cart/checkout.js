import classes from './checkout.module.css';
import React, { useRef, useState } from 'react'; 

const isEmpty = (val) => val.trim() === '';
const isPostalValid = (val) => val.trim().length <=6 ;

const Checkout = (props) => {
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    });

    const confirmHandler = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;

        const isValidName = !isEmpty(name);
        const isValidStreet = !isEmpty(street);
        const isValidPostal = !isEmpty(postal) && isPostalValid(postal);
        const isValidCity = !isEmpty(city);

        setFormValidity({
            name: isValidName,
            street: isValidStreet,
            postal: isValidPostal,
            city: isValidCity
        })

        const formIsValid = isValidName && isValidStreet && isValidPostal && isValidCity;

        if (!formIsValid) {
            return;
        }
    }

    const getClass = (isFieldValid) => {
        return isFieldValid ? classes.control : `${classes.control} ${classes.invalid}`;
    }

    const error = <p className={classes['error-message']}>Invalid Input</p>

    return (
        <form onSubmit={confirmHandler}>
            <div className={getClass(formValidity.name)}>
                <label htmlFor="name">Name</label>
                <input ref={nameRef} type='text' id="name"/>
                {!formValidity.name && error}
            </div>
            <div className={getClass(formValidity.street)}>
                <label htmlFor="street">Street</label>
                <input ref={streetRef} type='text' id="street" />
                {!formValidity.street && error}
            </div>
            <div className={getClass(formValidity.postal)}>
                <label htmlFor="postalCode">Postal Code</label>
                <input ref={postalRef} type='text' id="postalCode"/>
                {!formValidity.postal && error}
            </div>
            <div className={getClass(formValidity.city)}>
                <label htmlFor="city">City</label>
                <input ref={cityRef} type='text' id="city"/>
                {!formValidity.city && error}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit' className={classes.submit}>Confirm</button>
            </div>
            
        </form>
    )
}

export default Checkout;