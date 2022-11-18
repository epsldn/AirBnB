import { csrfFetch } from "./csrf";

const GET_REVIEWS = "reviews/getReviews";

const addReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    };
};

export const getReviews = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(addReviews(reviews));
        return reviews;
    }
};

export default function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case GET_REVIEWS: {
            return action.reviews;
        }
        default: {
            return state;
        }
    }
}