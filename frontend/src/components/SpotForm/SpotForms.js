import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addImageToSpot } from "../../store/spotImages";
import { createSpot, updateSpot } from "../../store/spots";
import "./SpotForm.css";

function validateData(name, price, address, city, state, country, description) {
    const errors = [];
    price = +price;
    if (name.length < 1) errors.push("Please enter your name!");
    if (isNaN(price) || price < 0) errors.push("Price must be a positive number!");
    if (address.length < 1) errors.push("Please enter your street address!");
    if (state.length < 1) errors.push("Please enter your state!");
    if (city.length < 1) errors.push("Please enter your city!");
    if (country.length < 1) errors.push("Please enter your country!");
    if (description.length < 1) errors.push("Please enter your description!");

    return errors;
}

export default function SpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const spot = location.state?.spot;
    const inCreateSpot = location.pathname.endsWith("/create");
    const user = useSelector(state => state.session.user);

    const [name, setName] = useState(spot?.name ?? "");
    const [address, setAddress] = useState(spot?.address ?? "");
    const [city, setCity] = useState(spot?.city ?? "");
    const [state, setState] = useState(spot?.state ?? "");
    const [country, setCountry] = useState(spot?.country ?? "");
    const [description, setDescription] = useState(spot?.description ?? "");
    const [previewImageUrl, setPreviewImageUrl] = useState(spot?.SpotImages[0].url ?? "");
    const [price, setPrice] = useState(spot?.price ?? "");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    if (inCreateSpot === false && !spot) return history.push("/");

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

        if (inCreateSpot === false) submission.id = spot.id;

        try {
            const response = inCreateSpot ? await dispatch(createSpot(submission)) : await dispatch(updateSpot(submission));

            if (response) {
                const image = await dispatch(addImageToSpot(spot.id, previewImage));
            }
        } catch (error) {
            console.log(error)
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
        <div id="spot-form-outer-container">
            <div>
                <h1 id="spot-form-title">{inCreateSpot ? "Let's get you started!" : "Let's update your spot!"}</h1>
                <form onSubmit={onSubmit} id="spot-form-container" className="form">
                    {hasSubmitted && <ul className="errors" id="spot-form-errors">
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
                        id="spot-form-textarea"
                    />
                    <input
                        type="text"
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
                    <button type="submit" id="submit">{inCreateSpot ? "Create" : "Update"} Spot!</button>
                </form>
            </div>
        </div>
    );
}