import { ADD_USER, DELETE_USER, EDIT_USER } from "./actions"

const initialState = [
    {
        id:'9ii',
        firstName: 'James',
        lastName: 'Black',
        email: 'JamesBlk@gmail.com',
        phone: '0975789765'
    },
    {
        id:'09o',
        firstName: 'Michael',
        lastName: 'Wills',
        email: 'MikeWill@gmail.com',
        phone: '0990000000'
    }
]




const reducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload]

        case DELETE_USER:
            let user = state.filter(item => {
                return item.id !== action.payload
            })
            return user;

        case EDIT_USER:
            let newUser = state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            });
            return newUser;

        default:
            return state

    }
}

export default reducer