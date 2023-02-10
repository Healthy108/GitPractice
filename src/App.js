import "./styles/App.css";
import { useState } from "react";
import Home from "./pages/Wrapper";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import UserContents from "./pages/UserContents";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister((prev) => !prev);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home handleShowRegister={handleShowRegister} />}
        />
        <Route path="usercontents" element={<UserContents />} />
      </Routes>
      <Register
        handleShowRegister={handleShowRegister}
        showRegister={showRegister}
      />
      {/* <Login /> */}
    </div>
  );
}

export default App;
