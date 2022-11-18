import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import "./Booking.css";

export default function Booking({ spot }) {
    const usDollar = Intl.NumberFormat("en-US");
    const user = useSelector(state => state.session.user);

    return (
        <div id="booking-holder">
            <div id="booking-content">
                <p>Price PlaceHolder</p>
                <p>${usDollar.format(Number(spot.price))} a night</p>
                {spot.ownerId === user?.id && <div id="button-holder-spot-description">
                    {<DeleteSpot spotId={spot.id} />}
                    {<Link to={{ pathname: `/spots/${spot.id}/edit`, state: { spot } }} id="spot-edit-button"> Edit </Link>}
                </div>}
            </div>
        </div>
    );
}