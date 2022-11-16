import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getSpotsFromDb } from "../../store/spots";
import "./AllSpots.css";

export default function AllSpots() {
    const history = useHistory();
    const dispatch = useDispatch();
    const spots = useSelector(state => Object.values(state.spots.Spots));

    useEffect(() => {
        dispatch(getSpotsFromDb());
    }, [dispatch]);

    if (spots.length < 1) return;

    const usDollar = Intl.NumberFormat("en-US");

    return (
        <div className="all-spots-gallery-container">
            <ul className="all-spots-gallery">
                {spots.map(spot => (
                    <Link to={`/spots/${spot.id}`} key={spot.id} className="spots-outer-frame">
                        <div>
                            <div className="spots-gallery-image-container">
                                <img src={spot.previewImage ?? console.log(spot.previewImage)} />
                            </div>
                            <div className="spots-information-container">
                                <div className="spots-information">
                                    <ul>
                                        <li id="spot-address">{`${spot.city}, ${spot.state}`}</li>
                                        <li id="spot-host">{`Hosted by ${spot.ownerName[0].toUpperCase() + spot.ownerName.slice(1).toLowerCase()}`}</li>
                                        <li id="spot-price"><span>{"$" + usDollar.format(Number(spot.price))}</span> {`night`}</li>
                                    </ul>
                                </div>
                                <div className="spots-rating">
                                    <i className="fa-solid fa-star"></i> <p>{`${spot.avgRating ??= "New"}`}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}