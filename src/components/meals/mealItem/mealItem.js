import classes from './mealItem.module.css';

const MealItem = (props) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <div className={classes.description}>{props.item.description}</div>
                <div className={classes.price}>{`Rs. ${props.item.price}`}</div>
            </div>
            
        </li>
    )
}

export default MealItem;