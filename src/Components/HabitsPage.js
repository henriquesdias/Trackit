import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useContext, useState } from "react";
import BackGroundPage from "./Styles/BackGroundPage";
import UserContext from "./UserContext";
import {createHabit} from "./ServiceAxios";
import { ThreeDots } from "react-loader-spinner";


function CreateHabit({visibilityForm,setVisibilityForm}){
  const [daysOfHabit , setDaysOfHabit] = useState([]);
  const {user, setUser} = useContext(UserContext);
  const [habit, setHabit] = useState("");
  const [blocked, setBlocked] = useState(false);
  function sendHabit(event){
    event.preventDefault();
    setBlocked(true);
    const body = {name: habit, days: daysOfHabit};
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`,
      }
    }
    const promise = createHabit(body,config);
  }
  return (
    <CreateHabitStyle visibility={visibilityForm}>
      <form onSubmit={sendHabit}>
        <input
          type="text"
          placeholder="nome do hábito"
          required
          value={habit}
          readOnly={blocked}
          onChange={(e) => setHabit(e.target.value)}
        />
        <Weekdays>
          {days.map((day, index) => (
            <Weekday
              key={index}
              index={index}
              daysOfHabit={daysOfHabit}
              setDaysOfHabit={setDaysOfHabit}
              blocked={blocked}
            >
              {day}
            </Weekday>
          ))}
        </Weekdays>
        <ButtonsForm>
          <div onClick={() => {setVisibilityForm("none")}}>Cancelar</div>
          <button type="submit" disabled={blocked}>
            {!blocked ? (
              "Salvar"
            ) : (
              <ThreeDots color="#FFFFFF" height={80} width={80} />
            )}
          </button>
        </ButtonsForm>
      </form>
    </CreateHabitStyle>
  );
}
const days = ["D","S","T","Q","Q","S","S"];
export default function HabitsPage(){
  const [showForm , setShowForm] = useState(false);
  const [visibilityForm, setVisibilityForm] = useState("block");
  return (
    <>
      <Header />
      <BackGroundPage>
        <MyHabits>
          <span>Meus hábitos</span>
          <AddHabit onClick={()=> {
            setShowForm(true);
            setVisibilityForm("block");
          }
            }>+</AddHabit>
        </MyHabits>
        {showForm ? <CreateHabit setShowForm={setShowForm} visibilityForm={visibilityForm} setVisibilityForm={setVisibilityForm} /> : ""}
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
  index,
  blocked
}) {
  const [background, setBackground] = useState("white");
  const [color, setColor] = useState("#d4d4d4");
  return (
    <WeekdayStyle
      background={background}
      color={color}
      onClick={() => {
        if (background === "white" && !blocked) {
          setBackground("#d4d4d4");
          setColor("white");
          setDaysOfHabit([...daysOfHabit,index]);
        } else if (!blocked){
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
  display: ${props => props.visibility};
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