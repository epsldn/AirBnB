import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";
import "./Reviews.css";

export default function Reviews({ spot }) {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews.Reviews);
    const user = useSelector(state => state.session.user);

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
            <div className="reviews-outer-container">
                {reviews.map(review => (
                    <div key={review.id} className="review-container">
                        <div className="title-container">
                            <div className="user-review-pfp">
                                <i className="fas fa-user-circle" />
                            </div>
                            <div className="user-review-information">
                                <p className="user-review-name">{review.User.firstName}</p>
                                <p className="user-review-date">{new Date(review.createdAt).toLocaleString("default", { month: "long" })}</p>
                            </div>
                        </div>
                        <div className="full-review-container">
                            <p>{review.review}</p>
                        </div>
                        {review.User.id === user?.id && <div>
                            <button className="demo-button">Edit</button>
                            <button className="demo-button">Delete</button>
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    );
}