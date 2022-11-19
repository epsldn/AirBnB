import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSpotEditedContext } from "../../context/isEditedContext";
import { createReview, updateReview } from "../../store/reviews";
import "./ReviewForms.css";
const dataValidator = (stars, review) => {
    const errors = [];
    if (stars < 1 || stars > 5) errors.push("Star Rating must be between one and 5");
    if (review.length === 0) errors.push("Please share your experience");
    return errors;
};

export default function EditReviewForm({ spot, review: oldReview, setShowModal }) {
    const dispatch = useDispatch();
    const { setIsEdited } = useSpotEditedContext();

    const [stars, setStars] = useState(oldReview?.stars ?? "");
    const [review, setReview] = useState(oldReview?.review ?? "");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        const errors = dataValidator(stars, review);

        if (errors.length > 0) {
            setErrors(errors);
            return;
        }

        const submission = {
            review,
            stars
        };

        try {
            if (oldReview) {
                submission.id = oldReview.id;
                dispatch(updateReview(submission));
            } else {
                dispatch(createReview(spot.id, submission));
            }
        } catch (error) {
            const data = await error.json();
            data.errors ? setErrors(Object.values(data.errors)) : setErrors(data.message);
            return;
        }

        setIsEdited(true);
        setShowModal(false);
    };

    return (
        <div className="spot-form-outer-container-edit" id="review-form-main-container">
            <div id="edit-spot-form-header">
                <div>
                    <p id="edit-form-close"><span onClick={_ => setShowModal(false)} id="edit-x">x</span></p>
                </div>
                <div>
                    <h1 id="edit-form-title">Let's {oldReview ? "update" : "create"} your review!</h1>
                </div>
            </div>
            <div id="spot-form-container">
                <form onSubmit={handleSubmit} className="spot-form-container form">
                    {hasSubmitted && <ul className="errors spot-form-errors">
                        {errors.map((error, idx) => <li key={idx}><i className="fa-solid fa-circle-exclamation"></i>{" " + error}</li>)}
                    </ul>}
                    <input
                        type="number"
                        onChange={event => setStars(event.target.value.replace(".", ""))}
                        value={stars}
                        step="1"
                        placeholder="Please rate from 1 to 5"
                        className="form-first"
                        id="review-first-input"
                    />
                    <textarea
                        onChange={event => setReview(event.target.value)}
                        value={review}
                        placeholder="Tell us about your stay"
                        className="spot-form-textarea form-last"
                        id="review-last-input"
                    />
                    <button type="submit" className="spot-form-submit">{oldReview ? "Update" : "Create"} Review!</button>
                </form>
            </div>
        </div>
    );
}