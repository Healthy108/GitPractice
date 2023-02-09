import "./styles/App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  console.log(showRegister);

  const handleShowRegister = () => {
    setShowRegister((prev) => !prev);
  };

  return (
    <div className="App">

      <Home handleShowRegister={handleShowRegister}/>
      <Register handleShowRegister={handleShowRegister} showRegister={showRegister}/>
      {/* <Login /> */}

    </div>
  );
}

export default App;
