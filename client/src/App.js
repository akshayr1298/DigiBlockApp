import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import SignIn from "./Components/SignIn";
import RoomPage from "./Pages/RoomPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/rooms" element={<RoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
