import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import UserContext from "./UserContext";
import { useContext } from "react";
import React from "react";

export default function Footer() {
  const { percentageOfHabits } = useContext(UserContext);
  return (
    <FooterStyle>
      <FooterLink to="/habitos">
        <p>Hábitos</p>
      </FooterLink>
      <div>
        <FooterLink to="/hoje">
          <CircularProgress>
            <CircularProgressbar
              value={percentageOfHabits}
              text={"hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#53B5FC",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </CircularProgress>
        </FooterLink>
      </div>
      <FooterLink to="/historico">
        <p>Histórico</p>
      </FooterLink>
    </FooterStyle>
  );
}
const FooterLink = styled(Link)`
  text-decoration: none;
`;
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
  font-family: "Lexend Deca", sans-serif;
  p {
    color: #52b6ff;
  }
  div {
    width: 100px;
    height: 100px;
    position: relative;
  }
`;
const CircularProgress = styled.span`
  position: absolute;
  z-index: 2;
  bottom: 30px;
`;
