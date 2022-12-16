import { legacy_createStore as createStore } from "redux";
import games from "../data/gamesData";


const state = {
    gamesList: games,
    selectedGenre: 'none',
    searchRequest: ''
}

const reducer = (action) => {
    switch (action.type) {
        case "SELECT_GENRE":
            console.log(action.payload.name, ' from reducer')
            return {
                ...state,
                selectedGenre: action.payload.name,
                gamesList: games.filter(game => game.genre === action.payload.name)
            }
        case 'SET_SEARCH':
            return {
                ...state,
                searchRequest: action.payload,
                gamesList: games.filter(game => game.name.includes(this.searchRequest))
            }
        default:
            return state
    }
}

const store = createStore(reducer, state);


export default store;