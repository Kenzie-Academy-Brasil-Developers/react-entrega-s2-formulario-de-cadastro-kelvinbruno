import RoutesMain from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RoutesMain />
    </div>
  );
}

export default App;
