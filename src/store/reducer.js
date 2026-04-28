import { counterDec, counterInc } from "./action-types"

export const initialState = {
    counterValue: 0
}

export const reducer = (state, action) => {
    switch (action.type){
        case counterInc:
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case counterDec:
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        default: 
            return {...state}
    }
}