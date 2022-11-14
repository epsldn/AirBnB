import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./LoginFormPage.css";

export default function LoginForm({ setShowModal }) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        return dispatch(sessionActions.login(credential, password))
            .then(_ => setShowModal(false))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.message) setErrors([data.message]);
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