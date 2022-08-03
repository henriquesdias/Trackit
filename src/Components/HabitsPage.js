import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function HabitsPage(){
  return (
    <>
      <Header />
      <MainStyle></MainStyle>
      <Footer />
    </>
  );
}
const MainStyle = styled.main`
  background-color: #f2f2f2;
  width: 100%;
  height: 100vh;
`;