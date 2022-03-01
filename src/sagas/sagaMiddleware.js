import { put, takeEvery, call } from "redux-saga/effects"
import { ACT_REQUEST_PERSONAJES, ACT_RESPONSE_PERSONAJES } from "../actions/action-types"
import axios from "axios";

function* requestPersonajes(action) {
    let resp = yield call(axios.get, "https://simpsons-quotes-api.herokuapp.com/quotes");
    yield put({
        type: ACT_RESPONSE_PERSONAJES,
        personajes: resp.data
    });
}

function* sagaMiddleware(action) {
    yield takeEvery(ACT_REQUEST_PERSONAJES, requestPersonajes)
    console.log("SAGA ACTIVADO");
}

export default sagaMiddleware;