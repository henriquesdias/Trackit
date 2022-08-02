import { BrowserRouter , Route , Routes } from "react-router-dom";
import GlobalStyle from "./reset";
import Header from "./Header";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/cadastro" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}