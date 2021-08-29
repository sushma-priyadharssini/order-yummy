import { useRef, useState } from 'react';
import Input from '../../ui/input';
import classes from './mealItemForm.module.css';

const MealItemForm = (props) => {
    const itemCountRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);


    const submitHandler = (event) => {
        event.preventDefault();
        const count = itemCountRef.current.value;
        if (count.trim().length === 0 || count < 1 || count > 5) {
            setAmountIsValid(false);
            return;
        }
        setAmountIsValid(true);
        props.onClick(+count);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={itemCountRef}
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'

                }}
             />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm;