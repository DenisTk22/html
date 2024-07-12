import { INCREMENT, DECREMENT } from "./types"

const initialState = {
    likes: 0
}

export const likesReducer = (state = initialState, action) => { // reducer принимает state и actionб а на выходе дает state

    switch(action.type) { //ловим тип экшина

        case INCREMENT:
            // state.likes = state.likes + 1 - так делать нельзя, нельзя изменять состояние напрямую
            return {
                ...state, // делаем копию state
                likes: state.likes + 1
            }

        case DECREMENT:
            if (state.likes > 0) {
                return {
                    ...state, // делаем копию state
                    likes: state.likes - 1
                }
            } else {
                return {
                    ...state, // делаем копию state
                    likes: state.likes = 0
                }
            }

        default:
          return state;  
    }
}