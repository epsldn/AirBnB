import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupFormPage from '../SignupFormPage/SignUpFormPage';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const [login, setLogin] = useState(true);

    console.log(showModal);
    return (
        <>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                    {isLoaded && <ProfileButton user={sessionUser} setLogin={setLogin} setShowModal={setShowModal} />}
                </li>
                {showModal &&
                    <Modal onClose={() => setShowModal(false)}>
                        {login ? <LoginForm setShowModal={setShowModal} /> : <SignupFormPage setShowModal={setShowModal} />}
                    </Modal>}
            </ul>
        </>
    );
}

export default Navigation;