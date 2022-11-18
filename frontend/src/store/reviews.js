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

export const createReview = (spotId, review) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: "POST",
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(addReviews);
        return review;
    }
};

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PUT",
        body: JSON.stringify(review)
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(addReviews);
        return review;
    }
};


export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(addReviews);
        return review;
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