import { ADD_TO_DATA } from '../constants'
const initialState = {
    cardData: []
}
export default function item(state = [], action) {
    switch (action.type) {
        case ADD_TO_DATA:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }


}
