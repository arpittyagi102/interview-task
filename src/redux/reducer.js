import { combineReducers } from "redux";

function authReducer(state = [],action){
    if(action.type === "signup"){
        return [...state,action.payload]
    }
    return state
}

const allReducers = combineReducers({authReducer})
export default allReducers;
  