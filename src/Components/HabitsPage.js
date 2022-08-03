import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function HabitsPage(){
  return (
    <>
      <Header />
      <BackGroundPage>
        <MyHabits>
          <span>Meus hábitos</span>
          <AddHabit>+</AddHabit>
        </MyHabits>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </BackGroundPage>
      <Footer />
    </>
  );
}
const BackGroundPage = styled.main`
  background-color: #f2f2f2;
  width: 100%;
  min-height: 100vh;
  padding-top: 98px;
  font-family: 'Lexend Deca', sans-serif;
  p{
    width: 85%;
    margin: 28px auto 0 auto;
    font-size: 18px;
    color: #666666;
  }
`;
const MyHabits = styled.div`
  margin: 0 auto 0 auto;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    font-size: 23px;
    color: #126BA5;
  }
`
const AddHabit = styled.div`
  background-color: #52B6FF;
  width: 40px;
  height: 35px;
  border-radius: 4.6px;
  font-size: 27px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`