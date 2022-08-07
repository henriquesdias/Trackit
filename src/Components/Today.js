import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import BackGroundPage from "./Styles/BackGroundPage";
import UserContext from "./UserContext";
import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import { searchHabits, markHabitAsConcluded, markOffHabitAsConcluded } from "./ServiceAxios";

export default function Today(){
  const {user, setUser} = useContext(UserContext);
  const [habitsToday, setHabitsToday] = useState([]);
  const { percentageOfHabits, setPercentageOfHabits} = useContext(UserContext);
  const date = dayjs().locale("pt");
  const numberOfHabitsConcluded = habitsToday.filter( element => element.done === true).length;
  console.log(numberOfHabitsConcluded);
  setPercentageOfHabits(Math.floor(( numberOfHabitsConcluded  * 100) / habitsToday.length));
  function getHabits(){
    const promise = searchHabits({
      headers: { Authorization: `Bearer ${user.token}` },
    });
    promise.then( answer => {
      setHabitsToday(answer.data);
      console.log(answer.data);
 
    });
  }
  useEffect( () => {
    getHabits();
  },[]);
  return (
    <>
      <Header />
        <BackGroundPage>
          <DayStyle>
            <span> {date.day()}, {date.date()}/{date.month() + 1}</span>
            {percentageOfHabits !== 0 ? <h5>{percentageOfHabits}% dos hábitos concluídos</h5>: <h2>Nenhum hábito concluído ainda</h2> }
          </DayStyle>
          {habitsToday.map( (element,index) => (<HabitToday name={element.name} currentSequence={element.currentSequence} highestSequence={element.highestSequence} key={index} itsDone={element.done} id={element.id} getHabits={getHabits}/>) )}
        </BackGroundPage>
      <Footer/>
    </>
  );
}
function HabitToday({name,currentSequence,highestSequence,itsDone,id,getHabits}){
  const {user,setUser} = useContext(UserContext);
  function checkHabit(){
    const promise = markHabitAsConcluded( id,{headers: { Authorization: `Bearer ${user.token}` }} );
    promise.catch( answer => console.log(answer));
    promise.then( () => getHabits());
  }
  function uncheckHabit(){
    const promise = markOffHabitAsConcluded( id,{headers: { Authorization: `Bearer ${user.token}` }} );
    promise.catch( answer => console.log(answer));
    promise.then( () => getHabits());
  }
  return (
    <HabitStyle background={itsDone ? "#8FC549" : "#EBEBEB"}>
      <div>
        <h4>{name}</h4>
        <h3>Sequência atual: {currentSequence} dias</h3>
        <h3>Seu recorde: {highestSequence} dias</h3>
      </div>
      <div>
        <ion-icon name="checkmark-sharp" onClick={ () => {
          if (itsDone) {
            uncheckHabit();
          } else {
            checkHabit();
          }
        }}></ion-icon>
      </div>
      </HabitStyle>
  );
}
const HabitStyle = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 90%;
  max-width: 340px;
  height: 94px;
  margin: 0 auto 10px auto;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  div:first-child{
    color: #666666;
    h4{
      font-size: 20px;
    }
    h3{
      font-size: 13px;
    }
    h3:nth-child(2){
      margin-top: 7px;
    }
  }
  div:last-child{
    background-color: ${props => props.background};
    height: 69px;
    width: 69px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ion-icon{
      font-size: 35px;
      color: white;
    }
  }

`
const DayStyle = styled.div`
  margin: 0 auto 0 auto;
  width: 90%;
  h2{
    font-size: 18px;
    color: #666666;
    margin-top: 8px;
    margin-bottom: 28px;
  }
  h5{
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 28px;
    color: #8FC549;
  }
`