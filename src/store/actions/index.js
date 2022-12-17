const selectGenre = (genreName) => {
    const action = {
        type: "SELECT_GENRE",
        payload: {
            name: genreName,
        },
    };
    return action;
};
const addToCart = (gameId) => {
    const action = {
        type: "ADD_TO_CART",
        payload: {
            gameId: gameId,
        },
    };
    return action;
};

export const actions = {
    selectGenre,
    addToCart,
};
