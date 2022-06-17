import logo from "./logo.svg";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <p class="text-red-500">
        The quick brown fox... <FontAwesomeIcon icon={faCoffee} /> <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
      </p>
    </div>
  );
}

export default App;
