import Header from "./Header";
import Footer from "./Footer";
import BackGroundPage from "./Styles/BackGroundPage";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

import Calendar from 'react-calendar'
export default function Historic(){
  return (
      <>
        <Header/>
        <BackGroundPage>
        <HistoricStyle>
          <span>Histórico</span>
        </HistoricStyle>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </BackGroundPage>
        <Footer/>
      </>
  );
}
const HistoricStyle = styled.div`
  width: 85%;
  margin: 0 auto 0 auto;
`
const CalendarStyle = styled(Calendar)`
  margin: 11px auto 0 auto;
  border-radius: 10px;
`