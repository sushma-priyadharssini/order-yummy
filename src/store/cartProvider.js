import { useReducer } from 'react';

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    total: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.total + (action.item.price * action.item.amount);
        return {
            items: updatedItems,
            total: updatedTotalAmount
        }
    } else if (action.type === 'REMOVE') {

    } 
    // return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartState({ type: 'ADD', item: item});
    }

    const removeItemHandler = (item) => {
        dispatchCartState({ type: 'REMOVE', item: item})
    }

    const cartContext = {
        items: cartState.items,
        total: cartState.total,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;