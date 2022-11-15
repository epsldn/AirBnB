const GET_SPOTS = "spots/getAllSpots";

const getSpots = (spots) => {
    return {
        type: GET_SPOTS,
        spots
    };
};

export const getSpotsFromDb = () => async dispatch => {
    const response = await fetch("/api/spots");

    if (response.ok) {
        const spots = await response.json();
        spots.Spots = spots.Spots.reduce((spotObj, spot) => {
            spotObj[spot.id] = spot;
            return spotObj;
        }, {});

        dispatch(getSpots(spots));
    }
};

export default function (state = { Spots: {}, page: 1, size: 20 }, action) {
    switch (action.type) {
        case GET_SPOTS: {
            return action.spots;
        }
        default: {
            return state;
        }
    }
};