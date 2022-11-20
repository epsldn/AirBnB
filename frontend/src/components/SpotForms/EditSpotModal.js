import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from "./EditSpotForm";
function EditSpotModal({ spot }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} id="spot-edit-button">Edit Spot</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSpotForm setShowModal={setShowModal} spot={spot} />
                </Modal>
            )}
        </>
    );
}

export default EditSpotModal;