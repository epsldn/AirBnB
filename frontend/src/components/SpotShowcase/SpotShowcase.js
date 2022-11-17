import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getSpotById, getSpotsFromDb } from "../../store/spots";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import "./SpotShowcase.css";

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

    return (
        <div className="spot-container">
            <div>
                <h1 id="spot-name">{spot.name}</h1>
                <div id="spot-information-summary-container">
                    <div id="spot-information-summary">
                        <div id="spot-review-information">
                            <div id="spot-review-rating"> <i className="fa-solid fa-star"></i><p>{spot.avgStarRating ??= "New"}</p></div>
                            <p id="spot-review-numreviews-separator">·</p>
                            <p id="numReviews">{`${spot.numReviews} `}<span>reviews</span></p>
                        </div>
                        <div id="spot-address">
                            <p className="information-break">.</p>
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
                        </div>
                        <div id="hosted-by-pfp">
                            <i className="fas fa-user-circle fa-10x" />
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
                        {spot.ownerId === user?.id && <Link to={{ pathname: `/spots/edit/${spot.id}`, state: { spot } }} id="spot-edit-button"> Edit </Link>}
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