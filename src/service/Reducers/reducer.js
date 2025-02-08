import { ADD_TO_CART } from "../constants";

const initialState = {
    cardData: []
};

export const cartItems = (state = [], action) => {
    if (action.type === ADD_TO_CART) {
        // console.log("reducer@@@", action);
        return [
            ...state,
            { cardData: action.data }
        ];
    }
    return state;
};
