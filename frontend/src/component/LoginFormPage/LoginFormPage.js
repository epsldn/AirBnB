import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/sessionReducer";
import "./LoginFormPage.css";

export default function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = event => {
        event.preventDefault();
        const errors = [];
        return dispatch(sessionActions.login(credential, password))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(Object.values(data.errors));
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Username or Email{" "}
                <input
                    type="text"
                    value={credential}
                    onChange={event => setCredential(event.target.value)}
                    required={true}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
            </label>
            <button id="submit" type="submit">Log In</button>
        </form>
    );
}