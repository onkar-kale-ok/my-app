import { SEND_DATA } from '../Constant'
const initialState = {
    data: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case SEND_DATA:
            return [
                ...state,
                {data: action.data}
            ]
        default:
            return state
    }


}
