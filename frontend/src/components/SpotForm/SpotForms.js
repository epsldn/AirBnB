import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./SpotForm.css";

function validateData(name, price, address, city, country, description) {
    const errors = [];
    price = +price;
    if (name.length < 1) errors.push("Please enter your name!");
    if (isNaN(price) || price < 0) errors.push("Price must be a positive number!");
    if (address.length < 1) errors.push("Please enter your street address!");
    if (city.length < 1) errors.push("Please enter your city!");
    if (country.length < 1) errors.push("Please enter your country!");
    if (description.length < 1) errors.push("Please enter your description!");

    return errors;
}

export default function SpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const inCreateSpot = location.pathname.toLowerCase().endsWith("create");
    const user = useSelector(state => state.session.user);
    if (!user) history.push("/");

    const usDollar = Intl.NumberFormat("en-US");

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        const errors = validateData(name, price, address, city, country, description);
        if (errors.length > 0) {
            setErrors(errors);
            return;
        };

        console.log({
            name,
            address,
            city,
            country,
            description,
            price,
        });

        setName("");
        setPrice("");
        setAddress("");
        setCity("");
        setCountry("");
        setDescription("");
        setHasSubmitted(false);
        setErrors([]);

        history.push("/");
    };

    return (
        <div id="spot-form-outer-container">
            <h1 id="spot-form-title">{inCreateSpot ? "Let's get you started!" : "Let's update your spot!"}</h1>
            <form onSubmit={onSubmit} id="spot-form-container" className="form">
                {hasSubmitted && <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}><i className="fa-solid fa-circle-exclamation"></i>{" " + error}</li>)}
                </ul>}
                <input
                    type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                    placeholder="Name"
                    className="form-first"
                />
                <input
                    type="text"
                    onChange={event => setAddress(event.target.value)}
                    value={address}
                    placeholder="Street Address"
                />
                <input
                    type="text"
                    onChange={event => setCity(event.target.value)}
                    value={city}
                    placeholder="City"
                />
                <input
                    type="text"
                    onChange={event => setCountry(event.target.value)}
                    value={country}
                    placeholder="Country"
                />
                <textarea
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                    placeholder="Tell us about your place"
                    id="spot-form-textarea"
                />
                <input
                    type="number"
                    onChange={event => setPrice(event.target.value)}
                    value={price}
                    placeholder="Price per night"
                    className="form-last"
                />
                <button type="submit" id="submit">{inCreateSpot ? "Create" : "Update"} Spot!</button>
            </form>
        </div>
    );
}