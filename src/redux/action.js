
export function createNewUser(user){
    
    console.log("CreateNewUser called");
    dispatch({
        type : "signup",
        payload : user,
    })
}
