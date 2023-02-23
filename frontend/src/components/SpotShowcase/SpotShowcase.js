import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotById } from "../../store/spots";
import { amenityPicker, featurePicker, features } from "../../dynamic-icon-feature";
import "./SpotShowcase.css";
import Booking from "../Bookings/Booking";
import Reviews from "../Reviews/Reviews";
import { useSpotEditedContext } from "../../context/isEditedContext";

const SpotShowCase = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots.spotById);
    const user = useSelector(state => state.session.user);
    const { isEdited, setIsEdited } = useSpotEditedContext();

    useEffect(() => {
        dispatch(getSpotById(spotId));
        setIsEdited(false);
    }, [dispatch, isEdited]);

    if (!spot) return null;

    const arrLength = spot.SpotImages.length;

    spot.SpotImages.length = 5;
    spot.SpotImages.fill({}, arrLength);

    const [feature1, feature2] = featurePicker(features);
    const amenityArray = amenityPicker();
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
                        <div id="spot-showcase-icons">
                            <button>
                                <i className="fa-solid fa-arrow-up-from-bracket" />
                                Share
                            </button>
                            <button>
                                <i className="fa-regular fa-heart" />
                                {/* <i className="fa-solid fa-heart" /> */}
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spot-grid-container">
                <div className="spot-images-container">
                    <img src={spot.SpotImages[0].url ?? "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"} className="spot-image" id="spot-preview-image" />
                    {spot.SpotImages.slice(1, 5).map((image, idx) => {
                        console.log(image);
                        return <img key={idx} id={`spot-image-${+idx + 2}`} src={`${image.url ?? "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"}`} className="spot-image" />;
                    })}
                </div>
            </div>
            <div id="spot-description-and-booking">
                <div id="spot-description-container">
                    <div id="hosted-by-container">
                        <div>
                            <p id="hosted-by">{`Entire place hosted by ${spot.Owner.firstName[0].toUpperCase() + spot.Owner.firstName.slice(1)}`}</p>
                            <p id="spot-rooms">{bedNumber * 2} Guests · {Math.floor(bedNumber * 1.5)} bedrooms · {bedNumber} beds · {Math.floor(bedNumber * .75)} baths</p>
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
                        <div className="three-selling-points-div" id="three-selling-points-last">
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
                        {/* <p className="learn-more">Learn more</p> */}
                    </div>
                    <div id="spot-long-description-container">
                        <p id="spot-long-description">{spot.description}</p>
                        {/* <div id="show-more-container">
                            <p id="show-more">Show More</p><i className="fa-solid fa-greater-than"></i>
                        </div> */}
                    </div>
                    <div id="amenity-list-container">
                        <div id="amenity-list-title">
                            <p>What this place offers</p>
                        </div>
                        <div id="amenity-list">
                            {amenityArray.map((amenity) => (
                                <div className={`amenity-container`} key={amenity.title}>
                                    <div className="amenity-icon">
                                        {amenity.icon}
                                    </div>
                                    <div className="amenity-title">
                                        {amenity.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Booking spot={spot} />
            </div>
            <Reviews spot={spot} user={user} />
        </div >
    );
};

export default SpotShowCase;;