import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import App from "../../App";
import SignupFormPage from "../SignupFormPage/SignUpFormPage";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

export default function Navigation() {
    const user = useSelector(state => state.session.user);
    return (
        <ul className="navigation">
            <Link id="home-button" exact to="/">
                <button>
                    airbncf
                </button>
            </Link>
            <div>
                <ProfileButton id="profile-button" />
            </div>
            {/* {user && <NavLink to="/logout">Log out</NavLink>} */}
            {/* {!user && <NavLink to="/signup">Sign up</NavLink>}
            {!user && <NavLink to="/login">Log in</NavLink>} */}
        </ul>
    );
};