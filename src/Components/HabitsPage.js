import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import BackGroundPage from "./Styles/BackGroundPage";
import CreateHabit from "./CreateHabit";
import UserContext from "./UserContext";
import { listHabits } from "./ServiceAxios";

export default function HabitsPage(){
  const [showForm , setShowForm] = useState(false);
  const [visibilityForm, setVisibilityForm] = useState("block");
  const {user,setUser} = useContext(UserContext);
  const [myHabits , setMyHabits] = useState([]);
  useEffect( () => {
      const promise = listHabits({
        headers: { Authorization: `Bearer ${user.token}` },
      });
      promise.then( answer => setMyHabits(answer.data));
      promise.catch( answer => console.log(answer));
  },[])
  console.log(myHabits);
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
        <Habit/>
      </BackGroundPage>
      <Footer />
    </>
  );
}
function Habit(){
  return (
    <HabitStyle>
      <div>
        <h1>Ler 1 capítulo de livro</h1>
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <Weekdays>
        {days.map((day, index) => (
          <Weekday
            key={index}
          >
            {day}
          </Weekday>
        ))}
      </Weekdays>
    </HabitStyle>
  );
}
function Weekday({ children }) {
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
        } else {
          setBackground("white");
          setColor("#d4d4d4");
        }
      }}
    >
      {children}
    </WeekdayStyle>
  );
}
const HabitStyle = styled.div`
  max-width: 340px;
  width: 90%;
  height: 91px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto 0 auto;
  padding: 18px 5px 18px 15px;
  h1{
    font-size: 20px;
    color: #666666;
  }
  > div:first-child{
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  ion-icon{
    font-size: 20px;
  }
`
const days = ["D", "S", "T", "Q", "Q", "S", "S"];
const WeekdayStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${(props) => props.background};
`;
const Weekdays = styled.div`
  display: flex;
  width: 234px;
  justify-content: space-between;
`;

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