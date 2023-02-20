import React from "react";

import styled from "styled-components";
import Calendar from "react-calendar";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BackGroundPage from "../styles/BackGroundPage";
import "react-calendar/dist/Calendar.css";

export default function Historic() {
  return (
    <>
      <Header />
      <BackGroundPage>
        <HistoricStyle>
          <span>Histórico</span>
        </HistoricStyle>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </BackGroundPage>
      <Footer />
    </>
  );
}
const HistoricStyle = styled.div`
  width: 85%;
  margin: 0 auto 0 auto;
`;
const CalendarStyle = styled(Calendar)`
  margin: 11px auto 0 auto;
  border-radius: 10px;
`;
