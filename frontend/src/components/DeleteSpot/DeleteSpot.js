import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSpotById } from "../../store/spots";

export default function DeleteSpot({ spotId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const onClick = () => {
        dispatch(deleteSpotById(spotId)).then(() => history.push("/"));
    };

    return (
        <button className="delete" onClick={onClick}>
            Delete
        </button>
    );
}