import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import App from "../../App";
import SignupFormPage from "../SignupFormPage/SignUpFormPage";
import ProfileButton from "./ProfileButton";

export default function Navigation() {
    const user = useSelector(state => state.session.user);
    return (
        <ul>
            <NavLink exact to="/">Home </NavLink>
            {user && <NavLink to="/logout">Log out</NavLink>}
            {user && <ProfileButton />}
            {!user && <NavLink to="/signup">Sign up</NavLink>}
            {!user && <NavLink to="/login">Log in</NavLink>}
        </ul>
    );
};