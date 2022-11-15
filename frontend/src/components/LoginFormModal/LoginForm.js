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
        <div className="login-main">
            <div className="form-header-login">
                <div className="login-form-x">
                    <button onClick={() => setShowModal(false)}>x</button>
                </div>
                <p>Log In or Sign Up</p>
            </div>
            <form onSubmit={handleSubmit} className="form-login">
                <div className="form-welcome-login">
                    <h2>Welcome to AirBnCF</h2>
                </div>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}><i class="fa-solid fa-circle-exclamation"></i>{" " + error}</li>)}
                </ul>
                <input
                    type="text"
                    value={credential}
                    onChange={event => setCredential(event.target.value)}
                    required={true}
                    placeholder="Username or Email"
                    className="form-first"
                />
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                    placeholder="Password"
                    className="form-last"
                    id="last"
                />
                <button id="submit" type="submit">Log In</button>
            </form>
        </div>
    );
}