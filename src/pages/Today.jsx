import { useContext, useState, useEffect } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BackGroundPage from "../styles/BackGroundPage";
import UserContext from "../context/UserContext";
import "dayjs/locale/pt";
import {
  searchHabits,
  markHabitAsConcluded,
  markOffHabitAsConcluded,
} from "../components/ServiceAxios";

export default function Today() {
  const weekday = dayjs().locale("pt").format("dddd");
  const date = dayjs().format("DD/MM");
  const { user, setUser } = useContext(UserContext);
  const infoUserSerialized = JSON.stringify(user);
  localStorage.setItem("userLogin", infoUserSerialized);
  const [habitsToday, setHabitsToday] = useState([]);
  const navigate = useNavigate();
  const { percentageOfHabits, setPercentageOfHabits } = useContext(UserContext);
  if (habitsToday.length === 0) {
    setPercentageOfHabits(0);
  } else {
    const numberOfHabitsConcluded = habitsToday.filter(
      (element) => element.done === true
    ).length;
    setPercentageOfHabits(
      Math.round((numberOfHabitsConcluded * 100) / habitsToday.length)
    );
  }
  function getHabits() {
    const promise = searchHabits();
    promise.then((answer) => {
      setHabitsToday(answer.data);
    });
  }
  useEffect(() => {
    getHabits();
  }, []);
  return (
    <>
      <Header />
      <BackGroundPage>
        <DayStyle>
          <span>
            {" "}
            {weekday[0].toUpperCase()}
            {weekday.slice(1)}, {date}
          </span>
          {percentageOfHabits !== 0 && !isNaN(percentageOfHabits) ? (
            <h5>{percentageOfHabits}% dos hábitos concluídos</h5>
          ) : (
            <h2>Nenhum hábito concluído ainda</h2>
          )}
        </DayStyle>
        {habitsToday.map((element, index) => (
          <HabitToday
            name={element.name}
            currentSequence={element.currentSequence}
            highestSequence={element.highestSequence}
            key={index}
            itsDone={element.done}
            id={element.id}
            getHabits={getHabits}
          />
        ))}
      </BackGroundPage>
      <Footer />
    </>
  );
}
function HabitToday({
  name,
  currentSequence,
  highestSequence,
  itsDone,
  id,
  getHabits,
}) {
  const { user } = useContext(UserContext);
  const [colorSequence, setColorSequence] = useState("");
  function checkHabit() {
    const promise = markHabitAsConcluded(id);
    promise.catch((answer) => console.log(answer));
    promise.then(() => getHabits());
  }
  function uncheckHabit() {
    const promise = markOffHabitAsConcluded(id);
    promise.catch((answer) => console.log(answer));
    promise.then(() => getHabits());
  }
  const areEqual = currentSequence === highestSequence;
  return (
    <HabitStyle
      background={itsDone ? "#8FC549" : "#EBEBEB"}
      color={areEqual ? "#8FC549" : "#666666"}
      colorCurrentSequence={colorSequence}
    >
      <div>
        <h4>{name}</h4>
        <h3>
          Sequência atual: <span>{currentSequence} dias</span>
        </h3>
        <h3>
          Seu recorde: <span>{highestSequence} dias</span>
        </h3>
      </div>
      <div>
        <ion-icon
          name="checkmark-sharp"
          onClick={() => {
            if (itsDone) {
              uncheckHabit();
            } else {
              checkHabit();
              setColorSequence("#8FC549");
            }
          }}
        ></ion-icon>
      </div>
    </HabitStyle>
  );
}
const HabitStyle = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 90%;
  max-width: 340px;
  min-height: 94px;
  margin: 0 auto 10px auto;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  div:first-child {
    color: #666666;
    h4 {
      font-size: 20px;
      max-width: 240px;
    }
    h3 {
      font-size: 13px;
      color: #666666;
    }
    h3:nth-child(2) {
      margin-top: 7px;
      span {
        color: ${(props) => props.colorCurrentSequence};
      }
    }
    span {
      color: ${(props) => props.color};
      font-size: 13px;
    }
  }
  div:last-child {
    background-color: ${(props) => props.background};
    height: 69px;
    width: 69px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ion-icon {
      font-size: 35px;
      color: white;
    }
  }
`;
const DayStyle = styled.div`
  margin: 0 auto 0 auto;
  width: 90%;
  h2 {
    font-size: 18px;
    color: #666666;
    margin-top: 8px;
    margin-bottom: 28px;
  }
  h5 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 28px;
    color: #8fc549;
  }
`;
