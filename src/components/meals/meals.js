import { Fragment } from "react"
import AvailableMeals from "./availableMeals"
import MealsSummary from "./mealSummary"


const Meals = () => {
    return (
        <Fragment>
            <AvailableMeals />
            <MealsSummary />
        </Fragment>
    )
}

export default Meals;