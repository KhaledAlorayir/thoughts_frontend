import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AutoLogin } from "./actions/user";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Alert from "./components/Alert";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AutoLogin());
  }, [dispatch]);

  const { isAuth } = useSelector((state) => state.user);

  return (
    <div className="App">
      <NavBar />
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
