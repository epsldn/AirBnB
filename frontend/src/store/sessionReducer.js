import { csrfFetch } from "./csrf";


const ADD_USER = "session/addUser";
const REMOVE_USER = "session/removeUser";

const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    };
};

const removeUser = (userId) => {
    return {
        action: REMOVE_USER,
        userId
    };
};

export const login = (credential, password) => async dispatch => {
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential, password })
    });

    if (response.ok) {
        const user = await response.json();
        console.log(user);
        dispatch(addUser(user));
        return user;
    }
};

export default (state = { user: null }, action) => {
    switch (action.type) {
        case ADD_USER: {
            return action.user;
        }
        case REMOVE_USER: {
            return {
                user: null
            };
        }
        default: {
            return state;
        }
    }
};