import { csrfFetch } from "./csrf";

const GET_SPOTS = "spots/getAllSpots";
const GET_ONE_SPOT = "spots/getSpotById";
const DELETE_SPOT = "spots/deleteSpot";

const getSpots = (spots) => {
    return {
        type: GET_SPOTS,
        spots
    };
};

const getOneSpot = (spotById) => {
    return {
        type: GET_ONE_SPOT,
        spotById
    };
};

const deleteSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    };
};

export const getSpotsFromDb = () => async dispatch => {
    const response = await csrfFetch("/api/spots");

    if (response.ok) {
        const spots = await response.json();
        spots.Spots = spots.Spots.reduce((spotObj, spot) => {
            spotObj[spot.id] = spot;
            return spotObj;
        }, {});

        dispatch(getSpots(spots));
    }
};

export const getSpotById = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`);

    if (response.ok) {
        const spot = await response.json();
        dispatch(getOneSpot(spot));
        return spot;
    }
};

export const deleteSpotById = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const spot = await response.json();
        console.log(spot);
        dispatch(deleteSpot(spotId));
        return spot;
    }
};

export default function (state = { Spots: {}, page: 1, size: 20, spotById: {} }, action) {
    switch (action.type) {
        case GET_SPOTS: {
            const newState = Object.assign({ ...state }, action.spots);
            return newState;
        }
        case GET_ONE_SPOT: {
            const newState = { ...state };
            newState.spotById = action.spotById;
            return newState;
        }
        case DELETE_SPOT: {
            const newState = { ...state };
            delete newState.Spots[action.spotId];
            newState.spotById = {};
            return newState;
        }
        default: {
            return state;
        }
    }
};