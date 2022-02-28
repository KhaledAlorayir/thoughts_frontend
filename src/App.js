import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AutoLogin } from "./actions/user";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Alert from "./components/Alert";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AutoLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
