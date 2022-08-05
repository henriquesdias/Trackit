import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import BackGroundPage from "./Styles/BackGroundPage";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function Today(){
  const {user, setUser} = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Header />
      <BackGroundPage></BackGroundPage>
      <Footer/>
    </>
  );
}