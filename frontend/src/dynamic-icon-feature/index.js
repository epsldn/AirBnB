export const features = [
    { icon: (<i className="fa-solid fa-location-dot"></i>), title: "Great location", description: "100% of recent guests gave the location a 5-star rating." },
    { icon: (<i className="fa-solid fa-key"></i>), title: "Great check-in experience", description: "100% of recent guests gave the check-in process a 5-star rating." },
    { icon: (<i className="fa-regular fa-calendar-xmark"></i>), title: "Free cancellation for 48 hours.", description: "" },
    { icon: (<i className="fa-solid fa-house-laptop"></i>), title: "Great for remote work", description: "Fast wifi at 94 Mbps, plus a dedicated workspace in a private room." },
    { icon: (<i className="fa-solid fa-door-open"></i>), title: "Self check-in", description: "Check yourself in with the keypad." },
    { icon: (<i className="fa-solid fa-computer"></i>), title: "Dedicated workspace", description: "A common area with wifi that’s well-suited for working." },
    { icon: (<i className="fa-solid fa-square-parking"></i>), title: "Park for free", description: "This is one of the few places in the area with free parking." },
    { icon: (<i className="fa-regular fa-star"></i>), title: "Experienced host", description: "Host has 10,145 reviews for other places." },
    { icon: (<i className="fa-solid fa-person-swimming"></i>), title: "Dive right in", description: "This is one of the few places in the area with a pool." },
    { icon: (<i className="fa-solid fa-wifi"></i>), title: "Fast wifi", description: "At 115 Mbps, you can take video calls and stream videos for your whole group." },
];

export const amenityArr = [
    { icon: (<i className="fa-solid fa-jug-detergent"></i>), title: "Washer" },
    { icon: (<i className="fa-solid fa-kitchen-set"></i>), title: "Kitchen" },
    { icon: (<i className="fa-solid fa-tv"></i>), title: "HDTV" },
    { icon: (<i className="fa-solid fa-hot-tub-person"></i>), title: "Private Hot Tub" },
    { icon: (<i className="fa-regular fa-snowflake"></i>), title: "AC" },
    { icon: (<i className="fa-solid fa-mountain-sun"></i>), title: "Mountain View" },
    { icon: (<i className="fa-solid fa-person-hiking"></i>), title: "Hiking Trail" },
    { icon: (<i className="fa-solid fa-seedling"></i>), title: "Garden View" },
    { icon: (<i className="fa-solid fa-arrow-right-to-city"></i>), title: "Short Commute To The City" },
    { icon: (<i className="fa-solid fa-store"></i>), title: "Private Balcony" },
    { icon: (<i className="fa-solid fa-mountain-sun"></i>), title: "Scenic Route" },
    { icon: (<i className="fa-solid fa-mug-hot"></i>), title: "Espresso Machine" },
    { icon: (<i className="fa-solid fa-paw"></i>), title: "Pets Allowed" },
    { icon: (<i className="fa-solid fa-video"></i>), title: "Security Cameras On Site" },
    { icon: (<i className="fa-solid fa-umbrella-beach"></i>), title: "Beach Access" },
    { icon: (<i className="fa-solid fa-volleyball"></i>), title: "Volleyball Court" },
];

export const featurePicker = (availableFeatures, pickedFeatures = []) => {
    if (pickedFeatures.length === 2) return pickedFeatures;
    availableFeatures = availableFeatures.slice(0);
    const randomIndex = Math.floor(Math.random() * availableFeatures.length);

    pickedFeatures.push(availableFeatures[randomIndex]);

    [availableFeatures[0], availableFeatures[randomIndex]] = [availableFeatures[randomIndex], availableFeatures[0]];

    return featurePicker(availableFeatures.slice(1), pickedFeatures);
};

export const amenityPicker = (amenities = amenityArr, pickedFeatures = []) => {
    if (pickedFeatures.length === 10) return pickedFeatures;
    const randomIndex = Math.floor(Math.random() * amenities.length);

    pickedFeatures.push(amenities[randomIndex]);

    [amenities[0], amenities[randomIndex]] = [amenities[randomIndex], amenities[0]];

    return amenityPicker(amenities.slice(1), pickedFeatures);
};