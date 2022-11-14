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

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    console.log(sessionLinks);
    return (
        <>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                    {isLoaded && sessionLinks}
                </li>
                {showModal && <Modal onClose={() => setShowModal(false)}>
                    {login ? <LoginForm /> : <SignupFormPage />}
                </Modal>}
            </ul>
        </>
    );
}

export default Navigation;