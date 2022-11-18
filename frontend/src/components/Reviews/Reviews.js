import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";
import "./Reviews.css";

export default function Reviews({ spot }) {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews.Reviews);
    useEffect(() => {
        dispatch(getReviews(spot.id));
    }, [dispatch]);

    if (!reviews) return null;

    return (
        <div id="spot-reviews-container">
            <div id="spot-reviews-information">
                <div id="spot-reviews-rating"> <i className="fa-solid fa-star"></i><p>{spot.avgStarRating ??= "New"}</p></div>
                <p id="spot-reviews-numreviews-separator">·</p>
                <p id="spot-reviews-num-reviews">{`${spot.numReviews} `}<span>reviews</span></p>
            </div>
            <div>
                <ul>
                    {reviews.map(review => <li key={review.id}>{review.review}</li>)}
                </ul>
            </div>
        </div>
    );
}