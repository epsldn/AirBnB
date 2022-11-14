import { csrfFetch } from "./csrf";


const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
    return {
        type: SET_USER,
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
        dispatch(setUser(user));
        return user;
    }
};

export const getSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    const session = await response.json();
    dispatch(setUser(session));
    return response;
};

export const createUser = (user) => async dispatch => {
    const response = await csrfFetch("api/users", {
        method: "POST",
        body: JSON.stringify(user)
    });

    if (response.ok) {
        const user = await response.json();
        dispatch(setUser(user));
        return response;
    }
};

export default (state = { user: null }, action) => {
    switch (action.type) {
        case SET_USER: {
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