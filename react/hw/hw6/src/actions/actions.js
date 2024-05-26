//В слайсе определите редьюсеры и действия для добавления нового продукта, удаления продукта по ID, обновления продукта и изменения его доступности.
//Каждый продукт должен иметь id, name, description, price, и available.
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';


export const addProduct = (productName, description, price) => ({
    type: ADD_PRODUCT,
    payload: {
        id: Date.now(),
        name: productName,
        description,
        price,
        available: true,
    }
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});

export const updateProduct = (id) => ({
    type: UPDATE_PRODUCT,
    payload: id,
});

export const toggleTask = (id) => ({
    type: TOGGLE_PRODUCT,
    payload: id,
});