import { useReducer } from 'react';

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    total: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.total + (action.item.price * action.item.amount);
        const existingIndex = state.items.findIndex(item => (item.id === action.item.id));
        const existingItem = state.items[existingIndex];

        let updatedItems;
        if (existingItem) {
            let updatedItem;
            updatedItem = { ...existingItem, amount: (existingItem.amount + action.item.amount)};
            updatedItems = [...state.items];
            updatedItems[existingIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            total: updatedTotalAmount
        }
    } else if (action.type === 'REMOVE') {
        let updatedItems;
        const existingIndex = state.items.findIndex(item => (item.id === action.itemId));
        const existingItem = state.items[existingIndex];
        const updatedTotalAmount = state.total - existingItem.price;
        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.itemId);
        } else {
            let updatedItem;
            updatedItem = { ...existingItem, amount: (existingItem.amount - 1)};
            updatedItems = [...state.items];
            updatedItems[existingIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            total: updatedTotalAmount
        }
    } 
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartState({ type: 'ADD', item: item});
    }

    const removeItemHandler = (itemId) => {
        dispatchCartState({ type: 'REMOVE', itemId: itemId})
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