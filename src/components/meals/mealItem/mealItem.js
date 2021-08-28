import classes from './mealItem.module.css';
import MealItemForm from './mealItemForm';

const MealItem = (props) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <div className={classes.description}>{props.item.description}</div>
                <div className={classes.price}>{`Rs. ${props.item.price}`}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem;