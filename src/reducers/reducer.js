import { INCRE,DECRE,RESET } from "../actions/type";
let i = {
    count: 10
}
function reduce(state = i, action) {
    switch (action.type) {
        case INCRE: return ({ ...state, count: action.payload })
        case DECRE: return state.count === 0
        ? { ...state, count: 0 }
        : { ...state, count: action.payload };
        case RESET:return {...state,count:0}
        default: return { ...state }
    }
}
export default reduce;