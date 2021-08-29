import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './mealItem.module.css';
import MealItemForm from './mealItemForm';

const MealItem = (props) => {
    const context = useContext(CartContext);

    const addItemHandler = (count) => {
        context.addItem({ 
            id:props.item.id,
            name: props.item.name,
            amount: count,
            price: props.item.price
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <div className={classes.description}>{props.item.description}</div>
                <div className={classes.price}>{`Rs. ${props.item.price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm onClick={addItemHandler}/>
            </div>
        </li>
    )
}

export default MealItem;