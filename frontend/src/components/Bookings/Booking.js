import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import EditSpotModal from "../SpotForms/EditSpotModal";
import "./Booking.css";

export default function Booking({ spot }) {
    const usDollar = Intl.NumberFormat("en-US");
    const user = useSelector(state => state.session.user);
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckout] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
    const [guests, setGuests] = useState(1);
    const [showGuestSelection, setShowGuestSelection] = useState(false);

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
                <div className="booking-calendar-container">
                    <div className="booking-calendar-buttons">
                        <button id="booking-check-in">
                            <label>
                                CHECK-IN
                            </label>
                            <p>
                                {checkIn.toLocaleDateString()}
                            </p>
                        </button>

                        <button id="booking-check-out">
                            <label>
                                CHECK-OUT
                            </label>
                            <p>
                                {checkOut.toLocaleDateString()}
                            </p>
                        </button>
                        <button id="booking-guest-amount"
                            tabIndex={setShowGuestSelection ? 1 : -1}
                            onBlur={() => setShowGuestSelection(false)}
                            onClick={() => setShowGuestSelection(true)}
                        >
                            <label>
                                GUESTS
                            </label>
                            <p>{guests > 1 ? `${guests} guests` : "1 guest"} <i className="fa-solid fa-angle-down"></i></p>
                            {showGuestSelection &&
                                <div id="booking-guest-selection">
                                    <div className="booking-guest-selection-option">

                                    </div>
                                </div>
                            }
                        </button>
                    </div>
                    <button id="submit">
                        Reserve
                    </button>
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
        </div >
    );
}