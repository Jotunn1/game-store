import { ReactComponent as CrossIcon } from "../../assets/images/cross.svg";
const DeleteFromCart = ({ gameId }) => {
    const deleteFromCart = (gameId) => {
        console.log(gameId);
    };
    return (
        <button
            className="button delete-btn"
            onClick={() => deleteFromCart(gameId)}
        >
            <CrossIcon />
        </button>
    );
};

export default DeleteFromCart;
