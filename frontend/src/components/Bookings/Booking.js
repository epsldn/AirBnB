import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import EditSpotModal from "../SpotForms/EditSpotModal";
import "./Booking.css";

export default function Booking({ spot }) {
    const usDollar = Intl.NumberFormat("en-US");
    const user = useSelector(state => state.session.user);

    return (
        <div id="booking-holder">
            <div id="booking-content">
                <p>${usDollar.format(Number(spot.price))} a night</p>
                {spot.ownerId === user?.id && <div id="button-holder-spot-description">
                    {<EditSpotModal spot={spot} />}
                    {<DeleteSpot spotId={spot.id} />}
                </div>}
            </div>
        </div>
    );
}