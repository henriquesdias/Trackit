import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useState} from "react";
import BackGroundPage from "./Styles/BackGroundPage";

function CreateHabit({habitsCreated,setHabitsCreated}){
  const [daysOfHabit , setDaysOfHabit] = useState([]);
  return (
    <CreateHabitStyle>
      <form>
        <input type="text" placeholder="nome do hábito" />
        <Weekdays>
          {days.map( (day,index) => (
          <Weekday 
            key={index} 
            index={index}  
            daysOfHabit={daysOfHabit} 
            setDaysOfHabit={setDaysOfHabit}>
            {day}
          </Weekday>) )}
        </Weekdays  >
        <ButtonsForm>
          <div onClick={()=>console.log(daysOfHabit)}>Cancelar</div>
          <button>Salvar</button>
        </ButtonsForm>
      </form>
    </CreateHabitStyle>
  );
}
const days = ["D","S","T","Q","Q","S","S"];
export default function HabitsPage(){
  const [habitsCreated , setHabitsCreated] = useState([]);
  return (
    <>
      <Header />
      <BackGroundPage>
        <MyHabits>
          <span>Meus hábitos</span>
          <AddHabit onClick={()=> setHabitsCreated([...habitsCreated, <CreateHabit habitsCreated={habitsCreated} setHabitsCreated={setHabitsCreated}/>]) }>+</AddHabit>
        </MyHabits>
        {habitsCreated.map(element => element)}
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </BackGroundPage>
      <Footer />
    </>
  );
}
function Weekday({
  children,
  daysOfHabit,
  setDaysOfHabit,
  index
}) {
  const [background, setBackground] = useState("white");
  const [color, setColor] = useState("#d4d4d4");
  return (
    <WeekdayStyle
      background={background}
      color={color}
      onClick={() => {
        if (background === "white") {
          setBackground("#d4d4d4");
          setColor("white");
          setDaysOfHabit([...daysOfHabit,index]);
        } else {
          setBackground("white");
          setColor("#d4d4d4");
          setDaysOfHabit([...daysOfHabit.filter(element => element !== index)])
        }
      }}
    >
      {children}
    </WeekdayStyle>
  );
}
const WeekdayStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${props => props.background};
`;
const ButtonsForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 29px;
  div{
    width: 84px;
    height: 35px;
    color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button{
    margin-left: 23px;
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 16px;
  }
`
const Weekdays = styled.div`
display: flex;
width: 234px;
justify-content: space-between;

`
const CreateHabitStyle = styled.div`
  max-width: 340px;
  width: 90%;
  height: 180px;
  margin: 20px auto 0 auto;
  background-color: white;
  border-radius: 5px;
  padding: 18px;
  input{
    max-width: 303px;
    width: 90%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    margin-bottom: 8px;
    outline: none;
    font-size: 20px;
    &::placeholder {
      font-size: 20px;
      color: #d4d4d4;
    }
  }
`

const MyHabits = styled.div`
  margin: 0 auto 0 auto;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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