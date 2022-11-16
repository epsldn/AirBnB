import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
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
    return (
        <div className="spot-container">
            <div>
                <h1 id="spot-name">{spot.name}</h1>
                <div id="spot-information-summary-container">
                    <div id="spot-information-summary">
                        <div id="spot-review-information">
                            <div id="spot-review-rating"> <i className="fa-solid fa-star"></i><p>{spot.avgStarRating ??= "New"}</p></div>
                            <p>·</p>
                            <p id="numReviews">{`${spot.numReviews} Reviews`}</p>
                        </div>
                        <p id="spotAddress"><span className="information-break">.</span>{`${spot.city}, ${spot.state}, ${spot.country}`}</p>
                    </div>
                </div>
            </div>
            <div className="spot-images-container">
                <div className="preview-image-container">
                    <img src={`${spot.SpotImages[0].url}`} className="spot-image" id="spot-preview-image" />
                </div>
                <div className="non-preview-images-container">
                    {spot.SpotImages.slice(1).map((image, idx) => {
                        return <div><img src={`${image.url}`} className="spot-image" /></div>;
                    })}
                </div>
            </div>
            <div>
                <p>{`Entire place hosted by ${spot.Owner.firstName[0].toUpperCase() + spot.Owner.firstName.slice(1)}`}</p>
            </div>
            <div>
                <p>Air Cover Placeholder</p>
            </div>
            <div>
                <p>{spot.description}</p>
            </div>
            <div>
                <p>Price PlaceHolder</p>
                <p>${usDollar.format(Number(spot.price))} a night</p>
            </div>
            {spot.ownerId === user?.id && <DeleteSpot spotId={spot.id} />}
        </div >
    );
};

export default SpotShowCase;