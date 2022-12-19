import { useDispatch } from "react-redux";
import { ReactComponent as CrossIcon } from "../../assets/images/cross.svg";
import { actions } from "../../store/actions";
const DeleteFromCart = ({ gameId }) => {
    const dispatch = useDispatch();
    const deleteFromCart = (gameId) => {
        console.log(gameId);
    };
    return (
        <span>
            <button
                className="button delete-btn"
                onClick={() => dispatch(actions.deleteFromCart(gameId))}
            >
                <CrossIcon />
            </button>
        </span>
    );
};

export default DeleteFromCart;
