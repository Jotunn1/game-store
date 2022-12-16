const selectGenre = (genreName) => {
    const action = {
        type: "SELECT_GENRE", payload: {
            name: genreName
        }
    }
    console.log(action, 'action');
    return action
}

export const actions = {
    selectGenre,
}
