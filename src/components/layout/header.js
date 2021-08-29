import React, { Fragment } from 'react';
import foodImage from '../../assets/food.jpg';
import HeaderCartButton from './headerCartButton';
import classes from './header.module.css'


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Order Yummy!</h1>
                <HeaderCartButton onShowCartHandler={props.onShowCartHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt="Food Varieties" />
            </div>
        </Fragment>
    );
}

export default Header;