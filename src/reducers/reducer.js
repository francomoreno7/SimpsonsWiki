import { ACT_RESPONSE_PERSONAJES } from "../actions/action-types";

export default function reducer(state, action) {
    let newState = { ...state };

    console.log("Llega al reducer", action.type);

    if (action.type === ACT_RESPONSE_PERSONAJES) {
        //agrego los personajes que me traen las acciones
        newState.personajes = [...state.personajes, ...action.personajes]

    }

    return newState;
}