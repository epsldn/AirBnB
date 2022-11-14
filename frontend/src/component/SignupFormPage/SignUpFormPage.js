import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SignupFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function resetData() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setErrors("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            firstName,
            lastname,
            email,
            username,
            password
        });

        resetData();
        history.push("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hello from signup</h1>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                First Name: {" "}
                <input
                    type="text"
                    onBlur={event => {
                        if (firstName.trim.length < 1) {
                            const errorObj = [...errors];
                            
                        }
                    }}
                    onChange={event => setFirstName(event.target.value)}
                    value={firstName}
                />
            </label>
        </form>
    );
}