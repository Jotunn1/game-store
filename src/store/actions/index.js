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

const deleteFromCart = (gameId) => {
    const action = {
        type: "DELETE_FROM_CART",
        payload: {
            gameId: gameId,
        },
    };
    return action;
};

const clearCart = () => {
    const action = {
        type: "CLEAR_CART",
    };
    return action;
};

const setSearchRequest = (searchRequest) => {
    const action = {
        type: "SET_SEARCH",
        payload: {
            searchRequest: searchRequest,
        },
    };
    return action;
};

export const actions = {
    selectGenre,
    addToCart,
    deleteFromCart,
    clearCart,
    setSearchRequest,
};
