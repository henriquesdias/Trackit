import React from "react";
import { useContext } from "react";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import UserContext from "../context/UserContext";
import {
  FooterStyle,
  CircularProgress,
  FooterLink,
} from "../styles/FooterStyle";

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
