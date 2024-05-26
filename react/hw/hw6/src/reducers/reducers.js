import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, TOGGLE_PRODUCT,} from '../actions/actions';

const initialState = {
    products: [],
};

let nextProductId = 0;

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    { id: nextProductId++, text: action.payload, available: true },
                ],
            };
        case TOGGLE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload ? { ...product, available: product.available } : product
                ),
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        default:
            return state;
    }
};

export default productsReducer;