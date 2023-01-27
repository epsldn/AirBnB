import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import EditSpotModal from "../SpotForms/EditSpotModal";
import "./Booking.css";

export default function Booking({ spot }) {
    const usDollar = Intl.NumberFormat("en-US");
    const bookingDollarFormat = Intl.NumberFormat("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    const user = useSelector(state => state.session.user);
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckout] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
    const daysBetween = (checkOut - checkIn) / (1000 * 3600 * 24);

    const guestButton = useRef(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const guests = adults + children + infants;
    const [showGuestSelection, setShowGuestSelection] = useState(false);

    function quantityUpdater(event, operationType, guestType, setGuestType) {
        event.preventDefault();
        event.stopPropagation();

        if (operationType === "plus") {
            setGuestType(guestType + 1);
        } else if (operationType === "minus") {
            setGuestType(guestType - 1);
        }
    }

    useEffect(() => {
        if (!showGuestSelection) return;
        function onClick(event) {
            if (guestButton.current && guestButton.current.contains(event.target) === false) {
                setShowGuestSelection(false);
            }
        }

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [showGuestSelection]);

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
                {spot.ownerId === user?.id ?
                    <div id="button-holder-spot-description">
                        <div >
                            <EditSpotModal spot={spot} />
                        </div>
                        <div>
                            <DeleteSpot spotId={spot.id} />
                        </div>
                    </div> :
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
                                onClick={() => setShowGuestSelection(true)}
                                ref={guestButton}
                            >
                                <label>
                                    GUESTS
                                </label>
                                <p>{guests > 1 ? `${guests} guests` : "1 guest"} <i className="fa-solid fa-angle-down"></i></p>
                                {showGuestSelection &&
                                    <div id="booking-guest-selection">
                                        <div className="booking-guest-selection-option">
                                            <div className="booking-guest-selection-option-label">
                                                <label>
                                                    Adults
                                                </label>
                                                <p>Age 13+</p>
                                            </div>
                                            <div className="booking-guest-selection-option-buttons">
                                                <button className="booking-guest-selection-circle-button"
                                                    onClick={(event) => quantityUpdater(event, "minus", adults, setAdults)}
                                                    disabled={adults === 1}
                                                >
                                                    <i className="fa-solid fa-minus" />
                                                </button>
                                                <div className="booking-guest-selection-quantity">
                                                    {adults}
                                                </div>
                                                <button className="booking-guest-selection-circle-button"
                                                    onClick={(event) => quantityUpdater(event, "plus", adults, setAdults)}
                                                >
                                                    <i className="fa-solid fa-plus" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="booking-guest-selection-option">
                                            <div className="booking-guest-selection-option-label">
                                                <label>
                                                    Children
                                                </label>
                                                <p>Ages 2-12</p>
                                            </div>
                                            <div className="booking-guest-selection-option-buttons">
                                                <button className="booking-guest-selection-circle-button"
                                                    onClick={(event) => quantityUpdater(event, "minus", children, setChildren)}
                                                    disabled={children === 0}
                                                >
                                                    <i className="fa-solid fa-minus" />
                                                </button>
                                                <div className="booking-guest-selection-quantity">
                                                    {children}
                                                </div>
                                                <button className="booking-guest-selection-circle-button"
                                                    onClick={(event) => quantityUpdater(event, "plus", children, setChildren)}
                                                >
                                                    <i className="fa-solid fa-plus" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="booking-guest-selection-option">
                                            <div className="booking-guest-selection-option-label">
                                                <label>
                                                    Infants
                                                </label>
                                                <p>Under 2</p>
                                            </div>
                                            <div className="booking-guest-selection-option-buttons">
                                                <button className="booking-guest-selection-circle-button"
                                                    onClick={(event) => quantityUpdater(event, "minus", infants, setInfants)}
                                                    disabled={infants === 0}
                                                >
                                                    <i className="fa-solid fa-minus" />
                                                </button>
                                                <div className="booking-guest-selection-quantity">
                                                    {infants}
                                                </div>
                                                <button className="booking-guest-selection-circle-button" onClick={(event) => quantityUpdater(event, "plus", infants, setInfants)}>
                                                    <i className="fa-solid fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </button>
                        </div>
                        <button id="submit">
                            Reserve
                        </button>

                        <p id="booking-wont-be-charged">You won't be charged yet</p>

                        <div id="booking-price-breakdown">
                            <div className="booking-price-breakdown-component">
                                <p className="booking-price-breakdown-label">
                                    ${bookingDollarFormat.format(spot.price)} X {daysBetween > 1 ? daysBetween + " nights" : "1 night"}
                                </p>

                                <p className="booking-price-breakdown-cost">
                                    ${bookingDollarFormat.format(spot.price * daysBetween)}
                                </p>
                            </div>

                            <div className="booking-price-breakdown-component">
                                <p className="booking-price-breakdown-label">
                                    Cleaning Fee
                                </p>

                                <p className="booking-price-breakdown-cost">
                                    ${bookingDollarFormat.format(guests * (20 + spot.price * .005) * daysBetween)}
                                </p>
                            </div>

                            <div className="booking-price-breakdown-component">
                                <p className="booking-price-breakdown-label">
                                    Service Fee
                                </p>

                                <p className="booking-price-breakdown-cost">
                                    ${bookingDollarFormat.format(spot.price * .75)}
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    );
}