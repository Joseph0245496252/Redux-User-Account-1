export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const EDIT_USER = 'EDIT_USER'

export const addUser = (user)=>{
    
    return async(dispatch, getState, getFirestore)=>{
        let fireStore = getFirestore();
            await fireStore.collection("users").add(user)
            dispatch({
                type:'ADD_USER',
                payload:user
            })
        
    }
}
export const deleteUser = (id)=>{
    return{
        type:'DELETE_USER',
        payload:id
    }
}
export const editUser = (user)=>{
    return{
        type:'EDIT_USER',
        payload:user
    }
}

