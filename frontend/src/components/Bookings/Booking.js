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
                <div id="booking-price-reviews">
                    <div id="booking-price">
                        <p><span>${usDollar.format(Number(spot.price))}</span> night</p>
                    </div>
                    <div>
                        {spot.numReviews > 0 && <div id="booking-reviews">
                            <div id="spot-reviews-num-reviews">
                                <>
                                    <i className="fa-solid fa-star" id="booking-star" />
                                    <p id="booking-star-rating">{spot.avgStarRating} · <span>{spot.numReviews} reviews</span></p>
                                </>
                            </div>
                        </div>}
                    </div>
                </div>
                {spot.ownerId === user?.id &&
                    <div id="button-holder-spot-description">
                        <div >
                            <EditSpotModal spot={spot} />
                        </div>
                        <div>
                            <DeleteSpot spotId={spot.id} />
                        </div>
                    </div>}
            </div>
        </div>
    );
}