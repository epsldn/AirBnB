// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { loginDemoUser } from "../../store/session";

function ProfileButton({ user, setLogin, setShowModal }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.signout());
    };
    
    return (
        <div className="profile-button">
            <div>
                <button onClick={openMenu} className="button-outline">
                    <div className="profile-button-icon">
                        <i className="fas fa-bars" />
                    </div>
                    <div className="profile-button-icon">
                        <i className="fas fa-user-circle" />
                    </div>
                </button>
            </div >
            {showMenu && (user ?
                (
                    <ul className="profile-dropdown">
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <li onClick={logout}>
                            Log Out
                        </li>
                    </ul>
                ) :
                (<ul className="profile-dropdown">
                    <li
                        style={
                            {
                                fontWeight: 525
                            }
                        }
                        onClick={() => {
                            setShowModal(true);
                            setLogin(false);
                        }}>
                        Sign up
                    </li>
                    <li onClick={() => {
                        setShowModal(true);
                        setLogin(true);
                    }}>
                        Log in
                    </li>
                    <li onClick={_ => dispatch(loginDemoUser())}>Log in as Demo User</li>
                </ul>))
            }
        </div >
    );
}

export default ProfileButton;