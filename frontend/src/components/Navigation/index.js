import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

export default function Navigation() {
    
    return (
        <ul className="navigation">
            <Link id="home-button" to="/">
                <button>
                    airbncf
                </button>
            </Link>
            <div>
                <ProfileButton id="profile-button" />
            </div>
        </ul>
    );
};