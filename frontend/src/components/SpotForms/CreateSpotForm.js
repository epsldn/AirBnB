import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addImageToSpot } from "../../store/spotImages";
import { createSpot } from "../../store/spots";
import "./SpotForm.css";

function validateData(name, price, address, city, state, country, description, previewImageUrl) {
    const errors = [];
    price = +price;
    if (name.length < 1) errors.push("Please enter your spot's name!");
    if (isNaN(price) || price < 0) errors.push("Price must be a positive number!");
    if (+price > 999999) errors.push("Please keep the amount below $1 million");
    if (address.length < 1) errors.push("Please enter your street address!");
    if (state.length < 1) errors.push("Please enter your state!");
    if (city.length < 1) errors.push("Please enter your city!");
    if (country.length < 1) errors.push("Please enter your country!");
    if (description.length < 1) errors.push("Please enter your description!");
    if (!previewImageUrl) errors.push("Please provide a preview image for your guests.");
    else if (imageValidator(previewImageUrl) === false) errors.push("Image must be be one of the following: jpg, jpeg, png, tiff, raw, psd");

    return errors;
}

function imageValidator(val) {
    val = val.split(".");
    const fileType = val[val.length - 1];
    console.log(fileType);
    const allowedValues = new Set(["jpg", "png", "tiff", "raw", "psd", "jpeg"]);
    return allowedValues.has(fileType);
}

export default function SpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [previewImageUrl, setPreviewImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    if (!user) return history.push("/");


    const onSubmit = async (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        const errors = validateData(name, price, address, city, state, country, description, previewImageUrl);

        if (errors.length > 0) {
            setErrors(errors);
            return;
        };

        const submission = {
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

        const previewImage = {
            url: previewImageUrl,
            preview: true
        };


        try {
            const spot = await dispatch(createSpot(submission));
            await dispatch(addImageToSpot(spot.id, previewImage));
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
        setPreviewImageUrl("");
        setHasSubmitted(false);
        setErrors([]);

        history.push("/");
    };

    return (
        <div className="spot-form-outer-container">
            <div>
                <h1 className="spot-form-title">Let's get started!</h1>
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
                        type="url"
                        onChange={event => setPreviewImageUrl(event.target.value)}
                        value={previewImageUrl}
                        placeholder="Preview Image Link"
                    />

                    <input
                        type="number"
                        onChange={event => setPrice(event.target.value.replace(".", ""))}
                        value={price}
                        step="1"
                        placeholder="Price per night"
                        className="form-last"
                    />
                    <button type="submit" className="spot-form-submit">Create Spot!</button>
                </form>
            </div>
        </div>
    );
}