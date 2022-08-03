import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";
export default function Footer(){
  return (
    <FooterStyle>
      <p>Hábitos</p>
      <div>
        <CircularProgress>
          <CircularProgressbar value={25}  text={'Hoje'} background backgroundPadding={6} styles={buildStyles({backgroundColor: "#53B5FC",textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"})}/>
        </CircularProgress>
      </div>
      <p>Histórico</p>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 36px;
  padding-right: 36px;
  font-size: 18px;
  font-family: 'Lexend Deca', sans-serif;
  p{
    color: #52B6FF;
  }
  div{
    width: 100px;
    height: 100px;
    position: relative;
  }
`
const CircularProgress = styled.span`
  position: absolute;
  z-index: 2;
  bottom: 30px;
`