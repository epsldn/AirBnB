import { csrfFetch } from "./csrf";

const ADD_IMAGE = "spotImages/addImage";

const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image
    };
};

export const addImageToSpot = (spotId, image) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        body: JSON.stringify(image)
    });

    if (response.ok) {
        const image = await response.json();
        dispatch(addImage(image));
        return image;
    }
};

export default function spotImagesReducer(state = {}, action) {
    switch (action.type) {
        case ADD_IMAGE: {
            return action.image;
        }
        default: {
            return state;
        }
    }
}