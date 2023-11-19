function userAuth([],action){
    if(action.type === "signup"){
        return [...state,action.payload]
    }
    return state
}