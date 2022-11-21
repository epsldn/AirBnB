import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/session";
import "./SignUpFormPage.css";

export default function SignupFormPage({ setShowModal }) {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassowrd, setRetypedPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, [dispatch]);

    function resetData() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setErrors([]);
    }

    function validateData() {
        const errors = [];
        // const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if (!firstName) errors.push("Please enter your first name");
        if (firstName.length > 256) errors.push("First name cannot be longer than 256 characters");
        if (!lastName) errors.push("Please enter your last name");
        if (lastName.length > 256) errors.push("Last name cannot be longer than 256 characters");
        if (email.length < 3) errors.push("Email must be longer than 3 characters");
        if (email.length > 256) errors.push("Email must be less than 256 charcters long");
        if (username.length < 4 || username.length > 30) errors.push("Username must be between 4 and 30 character long");
        if (username.includes("@")) errors.push("Username cannot include \"@\"");
        if (password.length < 8) errors.push("Password must be longer than 8 characters");
        if (password.length > 60) errors.push("Password cannot be longer than 60 characters long");
        if (retypedPassowrd !== password) errors.push("Passwords must match!");

        setErrors(errors);

        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        const returnedErrors = validateData();
        if (returnedErrors.length > 0) return;

        const user = {
            firstName,
            lastName,
            email,
            username,
            password
        };

        dispatch(createUser(user))
            .then(_ => setShowModal(false))
            .catch(async res => {
                const data = await res.json();
                const errors = [];
                if (data?.errors) errors.push(Object.values(data.errors));
                setErrors(errors);
            });

        if (errors.length > 0) return;
        resetData();
    };

    return (
        <div className="signup-main">
            <div className="form-header-login">
                <div className="login-form-x">
                    <button onClick={() => setShowModal(false)} id="edit-x">x</button>
                </div>
                <p>Log In or Sign Up</p>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-welcome-login">
                    <h2>Welcome to AirBnCF</h2>
                </div>
                {hasSubmitted && <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}><i className="fa-solid fa-circle-exclamation"></i>{" " + error}</li>)}
                </ul>}
                <input
                    type="text"
                    onChange={event => setFirstName(event.target.value)}
                    value={firstName}
                    placeholder="First Name"
                    className="form-first"
                    required
                />
                <input
                    type="text"
                    onChange={event => setLastName(event.target.value)}
                    value={lastName}
                    placeholder="Last Name"
                    required
                />

                <input
                    type="text"
                    onChange={event => setUsername(event.target.value)}
                    value={username}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    placeholder="password"
                    required
                />
                <input
                    type="password"
                    onChange={event => setRetypedPassword(event.target.value)}
                    value={retypedPassowrd}
                    placeholder="Confirm Password"
                    className="form-last"
                    required
                />
                <button id="submit" type="submit"> Sign Up </button>
            </form>
        </div>
    );
};;