import * as actionTypes from './shopping-types';
import { productData, productDataTwo } from '../../components/Products/data';

const INITIAL_STATE = {
    products: productData,
    productsTwo: productDataTwo,
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            if (action.payload.id >= 49) {
                const itemTwo = state.productsTwo.find((product) => product.id === action.payload.id )
                const inCartTwo = state.cart.find((itemTwo) => itemTwo.id === action.payload.id ? true : false);

                return {
                    ...state,
                    cart: inCartTwo ? state.cart.map((itemTwo) => itemTwo.id === action.payload.id ? { ...itemTwo, qty: itemTwo.qty + 1 } : itemTwo) : [...state.cart, { ...itemTwo, qty: 1 }]
                };
            } else {
                const item = state.products.find((product) => product.id === action.payload.id )
                const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
                return {
                    ...state,
                    cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
                }};
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer; 
