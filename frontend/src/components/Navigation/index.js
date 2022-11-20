import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupFormPage from '../SignupFormPage/SignUpFormPage';

function Navigation({ isLoaded }) {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const [login, setLogin] = useState(true);

    return (
        <>
            <ul className="navigation">
                <NavLink to="/" className="logo">
                    <div>
                        <i className="fa-solid fa-broom"></i>
                        <div className="navTitle">
                            <p>airbncf</p>
                        </div>
                    </div>
                </NavLink>
                <div id="right-navigation-container">
                    {sessionUser && <button id="right-navigation-airbncf" onClick={_ => history.push("/spots/create")}>Airbncf your home</button>}
                    <li>{isLoaded && <ProfileButton user={sessionUser} setLogin={setLogin} setShowModal={setShowModal} />}</li>
                </div>
                {showModal &&
                    <Modal onClose={() => setShowModal(false)}>
                        {login ? <LoginForm setShowModal={setShowModal} /> : <SignupFormPage setShowModal={setShowModal} />}
                    </Modal>}
            </ul>
        </>
    );
}

export default Navigation;