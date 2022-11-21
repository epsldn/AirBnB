import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useSpotEditedContext } from "../../context/isEditedContext";
import { addImageToSpot } from "../../store/spotImages";
import { createSpot, updateSpot } from "../../store/spots";
import "./SpotForm.css";

function validateData(name, price, address, city, state, country, description) {
    const errors = [];
    price = +price;
    if (name.length < 1) errors.push("Please enter your spot's name!");
    if (name.length > 50) errors.push("Please keep name under 50 characters");
    if (isNaN(price) || price < 0) errors.push("Price must be a positive number!");
    if (+price > 999999) errors.push("Please keep the amount below $1 million");
    if (address.length < 1) errors.push("Please enter your street address!");
    if (address.length > 80) errors.push("Please keep address under 80 characters");
    if (state.length < 1) errors.push("Please enter your state!");
    if (state.length > 80) errors.push("Please keep state name under 80 characters");
    if (city.length < 1) errors.push("Please enter your city!");
    if (city.length > 80) errors.push("Please keep city name under 80 characters");
    if (country.length < 1) errors.push("Please enter your country!");
    if (country.length > 80) errors.push("Please keep country name under 80 characters");
    if (description.length < 1) errors.push("Please enter your description!");

    return errors;
}

export default function SpotForm({ setShowModal, spot }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [name, setName] = useState(spot.name);
    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);
    const {setIsEdited } = useSpotEditedContext();

    if (!user) return history.push("/");


    const onSubmit = async (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        const errors = validateData(name, price, address, city, state, country, description);

        if (errors.length > 0) {
            setErrors(errors);
            return;
        };

        const submission = {
            id: spot.id,
            name,
            address,
            city,
            state,
            country,
            lat: 0.00,
            lng: 0.00,
            description,
            price: parseInt(price),
        };

        try {
            await dispatch(updateSpot(submission));
        } catch (error) {
            const data = await error.json();
            setErrors(Object.values(data.errors));
            return;
        }

        setName("");
        setPrice("");
        setAddress("");
        setCity("");
        setState("");
        setCountry("");
        setDescription("");
        setHasSubmitted(false);
        setErrors([]);

        setIsEdited(true);
        setShowModal(false);
    };

    return (
        <div className="spot-form-outer-container-edit">
            <div id="edit-spot-form-header">
                <div>
                    <p id="edit-form-close"><span onClick={_ => setShowModal(false)} id="edit-x">x</span></p>
                </div>
                <div>
                    <h1 id="edit-form-title">Let's update your spot!</h1>
                </div>
            </div>
            <div id="spot-form-container">
                <form onSubmit={onSubmit} className="spot-form-container form">
                    {hasSubmitted && <ul className="errors spot-form-errors">
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
                        onChange={event => setState(event.target.value)}
                        value={state}
                        placeholder="State"
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
                        className="spot-form-textarea"
                    />

                    <input
                        type="number"
                        onChange={event => setPrice(event.target.value.replace(".", ""))}
                        value={price}
                        step="1"
                        placeholder="Price per night"
                        className="form-last"
                    />
                    <button type="submit" className="spot-form-submit">Update Spot!</button>
                </form>
            </div>
        </div>
    );
}