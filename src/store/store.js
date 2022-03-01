import { createStore, applyMiddleware } from "redux"; 
import reducer from "../reducers/reducer";
//import sagaEmulator from "../middlewares/sagaEmulator";
import createSagaMiddleware from "@redux-saga/core";
import sagaMiddleware from "../sagas/sagaMiddleware";

const defaultData = {
    personajes: []
}

const sagaRunner = createSagaMiddleware();

export default createStore(reducer, defaultData, applyMiddleware(sagaRunner));

sagaRunner.run(sagaMiddleware);