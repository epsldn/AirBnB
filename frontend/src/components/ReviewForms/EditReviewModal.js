import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './EditReviewForm';

function EditReviewModal({ spot, review, edit }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {!spot && <button onClick={() => setShowModal(true)} className="review-button" id="edit-review">Edit</button>}
            {spot && <button onClick={() => setShowModal(true)} id="add-review-button">Add a review</button>}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm setShowModal={setShowModal} spot={spot} review={review} />
                </Modal>
            )}
        </>
    );
}

export default EditReviewModal;