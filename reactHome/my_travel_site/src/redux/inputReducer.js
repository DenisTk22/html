import { INPUT_TEXT } from "./types"

const initialState = {
    text: ''
}

export const inputReducer = (state = initialState, action) => { // reducer принимает state и actionб а на выходе дает state

    switch(action.type) { //ловим тип экшина

        case INPUT_TEXT:
            return {
                ...state, // делаем копию state
                text: action.text
            }


        default:
          return state;  
    }
}