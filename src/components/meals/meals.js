import { Fragment } from "react"
import AvailableMeals from "./availableMeals"
import MealsSummary from "./mealSummary"


const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;