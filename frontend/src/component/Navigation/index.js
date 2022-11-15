
export default function Navigation() {
    const user = useSelector(state => state.session.user);
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
            {/* {user && <NavLink to="/logout">Log out</NavLink>} */}
            {/* {!user && <NavLink to="/signup">Sign up</NavLink>}
            {!user && <NavLink to="/login">Log in</NavLink>} */}
        </ul>
    );
};