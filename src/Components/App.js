import { BrowserRouter , Route , Routes } from "react-router-dom";
import GlobalStyle from "./reset";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import HabitsPage from "./HabitsPage";
import Historic from "./Historic";
import Today from "./Today";
import UserContext from "./UserContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
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