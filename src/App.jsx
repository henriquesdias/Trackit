import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/reset";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import HabitsPage from "./pages/HabitsPage";
import Historic from "./pages/Historic";
import Today from "./pages/Today";
import UserContext from "./context/UserContext";

export default function App() {
  const [user, setUser] = useState(null);
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
