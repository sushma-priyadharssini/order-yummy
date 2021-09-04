import classes from './availableMeals.module.css';
import Card from '../ui/card';
import MealItem from './mealItem/mealItem';
import { useEffect, useState } from 'react';

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
// ];
  
const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
      const fetchMeals = async () => {
        const response = await fetch('https://react-test-68f18-default-rtdb.asia-southeast1.firebasedatabase.app/orderYummy.json');
        if (!response.ok) {
          throw(new Error('Something went wrong!'));
        }
        const data = await response.json();
        const meals = [];
        for(let i in data) {
          meals.push({...data[i], id: i });
        }
        setMeals(meals);
        setIsLoading(false);
      }

      fetchMeals().catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
    }, []);

    const mealsList = meals.map(meal => (
      <MealItem key={meal.id} item={meal} />
    ));
    if (isLoading) {
      return (
        <section className={classes.mealsLoader}>
          <p>Loading...</p>
        </section>
      );
    } else if (!isLoading && !!error) {
      return (
        <section className={classes.mealsLoader}>
          <p>{error}</p>
        </section>
      );
    }
    return (
        <section className={classes.meals}>
            <Card>
              <ul>
                  {mealsList}
              </ul>
            </Card>   
        </section>  
    );
}

export default AvailableMeals;