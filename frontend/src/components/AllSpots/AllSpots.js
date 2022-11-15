import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

    return (
        <div className="all-spots-gallery">
            <ul>
                {spots.map(spot => (
                    <li key={spot.id}>
                        <div className="spot-outer-frame">
                            <div>
                                <img src={spot.previewImage ?? console.log(spot.previewImage)} />
                            </div>
                            <div>
                                <div>
                                    <ul>
                                        <li>{`${spot.city}, ${spot.state}`}</li>
                                        <li>{`Hosted by ${spot.ownerName[0].toUpperCase() + spot.ownerName.slice(1).toLowerCase()}`}</li>
                                        <li>{`$${spot.price} night`}</li>
                                    </ul>
                                </div>
                                <div>
                                    <li><i class="fa-solid fa-star"></i>{`${spot.avgRating ?? "Be the first to Review!"}`}</li>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}