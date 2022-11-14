import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createUser } from "../../store/sessionReducer";
import "./SignUpFormPage.css";

export default function SignupFormPage({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    if(user)<
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassowrd, setRetypedPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

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
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (firstName.length < 1) errors.push("Please enter your first name");
        if (lastName.length < 1) errors.push("Please enter your last name");
        if (email.length < 3) errors.push("Email must be longer than 3 characters");
        else if (emailRegex.test === false) errors.push("Please enter a valid email");
        if (email.length > 256) errors.push("Email must be less than 256 charcters long");
        if (username.length < 4 || username.length > 30) errors.push("Username must be between 4 and 30 character long");
        if (password.length < 8) errors.push("Password must be longer than 8 characters");
        if (retypedPassowrd !== password) errors.push("Passwords must match!");

        setErrors(errors);

        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        const returnedErrors = validateData();
        if (returnedErrors.length > 1) return;

        const user = {
            firstName,
            lastName,
            email,
            username,
            password
        };

        dispatch(createUser(user)).catch(async res => {
            const data = await res.json();
            const errors = [];
            if (data?.errors) errors.push(Object.values(data.errors));
            setErrors(errors);
        });

        resetData();
        history.push("/");
    };

    return (
        <form onSubmit={handleSubmit} onChange={validateData}>
            {hasSubmitted && <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>}
            <label>
                First Name:
                <input
                    type="text"
                    onChange={event => setFirstName(event.target.value)}
                    value={firstName}
                    required
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    onChange={event => setLastName(event.target.value)}
                    value={lastName}
                    required
                />
            </label>
            <label>
                username:
                <input
                    type="text"
                    onChange={event => setUsername(event.target.value)}
                    value={username}
                    required
                />
            </label>
            <label>
                email:
                <input
                    type="email"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />
            </label>
            <label>
                password:
                <input
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    required
                />
            </label>
            <label>
                Confirm password
                <input
                    type="password"
                    onChange={event => setRetypedPassword(event.target.value)}
                    value={retypedPassowrd}
                    required
                />
            </label>
            <button id="submit" type="submit" disabled={hasSubmitted && errors.length > 1}> Submit </button>
        </form>
    );
}