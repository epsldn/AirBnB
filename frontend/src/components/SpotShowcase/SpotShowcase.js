import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getSpotById, getSpotsFromDb } from "../../store/spots";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import "./SpotShowcase.css";

const features = [
    { icon: (<i className="fa-solid fa-location-dot"></i>), title: "Great location", description: "100% of recent guests gave the location a 5-star rating." },
    { icon: (<i className="fa-solid fa-key"></i>), title: "Great check-in experience", description: "100% of recent guests gave the check-in process a 5-star rating." },
    { icon: (<i className="fa-regular fa-calendar-xmark"></i>), title: "Free cancellation for 48 hours.", description: "" },
    { icon: (<i className="fa-solid fa-house-laptop"></i>), title: "Great for remote work", description: "Fast wifi at 94 Mbps, plus a dedicated workspace in a private room." },
    { icon: (<i className="fa-solid fa-door-open"></i>), title: "Self check-in", description: "Check yourself in with the keypad." },
    { icon: (<i className="fa-solid fa-computer"></i>), title: "Dedicated workspace", description: "A common area with wifi that’s well-suited for working." },
    { icon: (<i className="fa-solid fa-square-parking"></i>), title: "Park for free", description: "This is one of the few places in the area with free parking." },
    { icon: (<i className="fa-regular fa-star"></i>), title: "Experienced host", description: "Host has 10,145 reviews for other places." },
    { icon: (<i className="fa-solid fa-person-swimming"></i>), title: "Dive right in", description: "This is one of the few places in the area with a pool." },
    { icon: (<i className="fa-solid fa-wifi"></i>), title: "Fast wifi", description: "At 115 Mbps, you can take video calls and stream videos for your whole group." },
];


const featurePicker = (availableFeatures, pickedFeatures = []) => {
    if (pickedFeatures.length === 2) return pickedFeatures;
    availableFeatures = availableFeatures.slice(0);
    const randomIndex = Math.floor(Math.random() * availableFeatures.length);
    pickedFeatures.push(availableFeatures[randomIndex]);
    [availableFeatures[0], availableFeatures[randomIndex]] = [availableFeatures[randomIndex], availableFeatures[0]];

    return featurePicker(availableFeatures.slice(1), pickedFeatures);
};

const SpotShowCase = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots.spotById);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getSpotById(spotId));
    }, [dispatch]);

    const usDollar = Intl.NumberFormat("en-US");

    if (!spot.id) return null;
    const arrLength = spot.SpotImages.length;

    spot.SpotImages.length = 5;
    spot.SpotImages.fill({}, arrLength);

    const [feature1, feature2] = featurePicker(features);
    const bedNumber = Math.floor(Math.random() * 4 + 2);
    return (
        <div className="spot-container">
            <div>
                <h1 id="spot-name">{spot.name}</h1>
                <div id="spot-information-summary-container">
                    <div id="spot-information-summary">
                        <div id="spot-review-information">
                            <div id="spot-review-rating">
                                <i className="fa-solid fa-star"></i>
                                <p>{spot.avgStarRating ??= "New"}</p>
                            </div>
                            <div id="spot-review-numreviews-separator">
                                <p>·</p>
                            </div>
                            <p id="numReviews">{`${spot.numReviews} `}<span>reviews</span></p>
                        </div>
                        <div id="super-host">
                            <p className="information-break">.</p>
                            <div id="super-host-content-container">
                                <i className="fa-solid fa-medal"></i>
                                <p>Superhost</p>
                            </div>
                            <p className="information-break">.</p>
                        </div>
                        <div id="spot-address">
                            <p>{`${spot.city}, ${spot.state}, ${spot.country}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spot-grid-container">
                <div className="spot-images-container">
                    <img src={spot.SpotImages[0].url ?? "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"} className="spot-image" id="spot-preview-image" />
                    {spot.SpotImages.slice(1, 5).map((image, idx) => {
                        return <img key={idx} id={`spot-image-${+idx + 2}`} src={`${image.url ?? "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"}`} className="spot-image" />;
                    })}
                </div>
            </div>
            <div id="spot-description-and-booking">
                <div id="spot-description-container">
                    <div id="hosted-by-container">
                        <div>
                            <p id="hosted-by">{`Entire place hosted by ${spot.Owner.firstName[0].toUpperCase() + spot.Owner.firstName.slice(1)}`}</p>
                            <p id="spot-rooms">{bedNumber * 2} Guests · {Math.floor(bedNumber * 1.5)} bedrooms · {bedNumber} beds · {Math.floor(bedNumber *.75)} baths</p>
                        </div>
                        <div id="hosted-by-pfp">
                            <i className="fas fa-user-circle" />
                        </div>
                    </div>
                    <div id="three-selling-points">
                        <div className="three-selling-points-div">
                            <div className="three-selling-points-icon">
                                <i className="fa-solid fa-medal"></i>
                            </div>
                            <div className="three-selling-points-summary">
                                <div className="three-selling-points-title">
                                    <p>{spot.Owner.firstName[0].toUpperCase() + spot.Owner.firstName.slice(1)} is a Superhost</p>
                                </div>
                                <div className="three-selling-points-description">
                                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                                </div>
                            </div>
                        </div>
                        <div className="three-selling-points-div">
                            <div className="three-selling-points-icon">
                                {feature1.icon}
                            </div>
                            <div className="three-selling-points-summary">
                                <div className="three-selling-points-title">
                                    {feature1.title}
                                </div>
                                <div className="three-selling-points-description">
                                    {feature1.description}
                                </div>
                            </div>
                        </div>
                        <div className="three-selling-points-div">
                            <div className="three-selling-points-icon">
                                {feature2.icon}
                            </div>
                            <div className="three-selling-points-summary">
                                <div className="three-selling-points-title">
                                    {feature2.title}
                                </div>
                                <div className="three-selling-points-description">
                                    {feature2.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="aircover-container">
                        <p id="aircover"><span id="aircover-air">air</span>cover</p>
                        <p id="aircover-description">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                        <p className="learn-more">Learn more</p>
                    </div>
                    <div id="spot-long-description-container">
                        <p id="spot-long-description">{spot.description}</p>
                        <div id="show-more-container">
                            <p id="show-more">Show More</p><i className="fa-solid fa-greater-than"></i>
                        </div>
                    </div>
                    <div id="button-holder-spot-description">
                        {spot.ownerId === user?.id && <DeleteSpot spotId={spot.id} />}
                        {spot.ownerId === user?.id && <Link to={{ pathname: `/spots/${spot.id}/edit`, state: { spot } }} id="spot-edit-button"> Edit </Link>}
                    </div>
                </div>
                <div>
                    <p>Price PlaceHolder</p>
                    <p>${usDollar.format(Number(spot.price))} a night</p>
                </div>
            </div>
            <div id="spot-reviews-container">
                <div id="spot-reviews-information">
                    <div id="spot-reviews-rating"> <i className="fa-solid fa-star"></i><p>{spot.avgStarRating ??= "New"}</p></div>
                    <p id="spot-reviews-numreviews-separator">·</p>
                    <p id="spot-reviews-num-reviews">{`${spot.numReviews} `}<span>reviews</span></p>
                </div>
            </div>
        </div >
    );
};

export default SpotShowCase;;