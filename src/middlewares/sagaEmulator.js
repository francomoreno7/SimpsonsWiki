import { ACT_REQUEST_PERSONAJES, ACT_RESPONSE_PERSONAJES } from "../actions/action-types"

const sagaEmulator = state => dispatch => action => {
    if (action.type === ACT_REQUEST_PERSONAJES) {
        console.log("El middleware convierte un request en un Response")
        dispatch({
            type: ACT_RESPONSE_PERSONAJES,
            personajes: Array(1).fill({
                "quote": "Can't we have one meeting that doesn't end with us digging up a corpse?",
                "character": "Mayor Quimby",
                "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799",
                "characterDirection": "Right"
            })
        })
    } else {
        dispatch(action);
    }
}

export default sagaEmulator; 