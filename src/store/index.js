import { legacy_createStore as createStore } from "redux";
import games from "../data/gamesData";

const initialState = {
    gamesList: games,
    selectedGenre: "none",
    searchRequest: "",
    cart: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SELECT_GENRE":
            if (action.payload.name === "none")
                return {
                    ...state,
                    selectedGenre: action.payload.name,
                    gamesList: games,
                };
            else
                return {
                    ...state,
                    selectedGenre: action.payload.name,
                    gamesList: games.filter(
                        (game) => game.genre === action.payload.name
                    ),
                };
        case "ADD_TO_CART":
            console.log(state);
            return {
                ...state,
                cart: [
                    ...state.cart,
                    games.find((game) => game.id === action.payload.gameId),
                ],
            };
        case "SET_SEARCH":
            return {
                ...state,
                searchRequest: action.payload.searchRequest,
                gamesList: games.filter((game) =>
                    game.name.includes(action.payload.searchRequest)
                ),
            };
        default:
            return state;
    }
};

const store = createStore(reducer, initialState);

export default store;
