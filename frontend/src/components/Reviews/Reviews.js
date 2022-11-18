import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpotEditedContext } from "../../context/isEditedContext";
import { deleteReview, getReviews } from "../../store/reviews";
import EditReviewModal from "../ReviewForms/EditReviewModal";
import "./Reviews.css";

export default function Reviews({ spot }) {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews.Reviews);
    const user = useSelector(state => state.session.user);
    const { setIsEdited } = useSpotEditedContext();
    let hasNotReviewed = true;
    useEffect(() => {
        dispatch(getReviews(spot.id));
    }, [dispatch, spot]);

    if (!reviews) return null;

    const deleteButton = (reviewId) => {
        setIsEdited(true);
        dispatch(deleteReview(reviewId));
    };

    return (
        <div id="spot-reviews-container">
            <div id="spot-reviews-information">
                {spot.numReviews > 0 && <><div id="spot-reviews-rating"> <i className="fa-solid fa-star"></i><p>{spot.avgStarRating}</p></div>
                    <p id="spot-reviews-numreviews-separator">·</p></>}
                <p id="spot-reviews-num-reviews">{spot.numReviews > 0 ? (<>{`${spot.numReviews} `}<span>reviews</span></>) : "No Reviews (yet)"}</p>
            </div>
            <div className="reviews-outer-container">
                {reviews.map(review => {
                    if (review.User.id === user?.id) hasNotReviewed = false;
                    return (
                        <div key={review.id} className="review-container">
                            <div className="title-container">
                                <div className="user-review-pfp">
                                    <i className="fas fa-user-circle" />
                                </div>
                                <div className="user-review-buttons-container">
                                    <div className="user-review-information">
                                        <p className="user-review-name">{review.User.firstName}</p>
                                        <p className="user-review-date">{new Date(review.createdAt).toLocaleString("default", { month: "long" })}</p>
                                    </div>
                                    {review.User.id === user?.id && <div>
                                        <EditReviewModal review={review} />
                                        <button className="review-button" id="delete-review" onClick={() => deleteButton(review.id)}>Delete</button>
                                    </div>}
                                </div>
                            </div>
                            <div className="full-review-container">
                                <p>{review.review}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {(spot.Owner.id !== user?.id) && hasNotReviewed && <div id="add-review-container">
                <EditReviewModal spot={spot} />
            </div>}
        </div>
    );
}