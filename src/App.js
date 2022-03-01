import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.css";
import Personajes from "./containers/Personajes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Cabecera />
      <main className="container">
        <Personajes />
      </main>
    </Provider>
  );
}

export default App;
