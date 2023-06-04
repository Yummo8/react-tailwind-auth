import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { createContext, useState } from "react";
export const AuthContext = createContext();
function App() {
  const [jwt, setJwt] = useState(null);
  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ auth: [jwt, setJwt] }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
