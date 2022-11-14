import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as sessionActions from '../../store/sessionReducer';
import LoginFormModal from "../LoginForm";

export default function ProfileButton() {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(select => select.session.user);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            console.log(e.target);
            if (e.target.tagName !== "BUTTON") setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.signout());
    };


    return (
        <>
            <button onClick={openMenu}>
                <i className="fa-solid fa-user" />
            </button>
            {!user && showMenu && (
                <ul className="profile-dropdown">
                    <LoginFormModal />
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
            )}


            {user && showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
};