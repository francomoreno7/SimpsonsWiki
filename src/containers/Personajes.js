import { connect } from "react-redux";
import { ACT_REQUEST_PERSONAJES } from "../actions/action-types";
import Personajes from "../components/Personajes";

function mapStateToProps(state) {
    return {
        personajes: state.personajes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        levantarPersonajes: () => {
            dispatch({
                type: ACT_REQUEST_PERSONAJES
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personajes);