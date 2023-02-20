import { useState } from "react";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./Components/Styles/reset";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import HabitsPage from "./Components/HabitsPage";
import Historic from "./Components/Historic";
import Today from "./Components/Today";
import UserContext from "./Components/UserContext";

export default function App() {
  const [user, setUser] = useState("");
  const [percentageOfHabits, setPercentageOfHabits] = useState(0);
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ user, setUser, percentageOfHabits, setPercentageOfHabits }}
      >
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/habitos" element={<HabitsPage />}></Route>
          <Route path="/cadastro" element={<SignUp />}></Route>
          <Route path="/historico" element={<Historic />}></Route>
          <Route path="/hoje" element={<Today />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
