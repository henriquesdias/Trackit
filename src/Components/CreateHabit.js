import UserContext from "./UserContext";
import { createHabit , listHabits} from "./ServiceAxios";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import styled from "styled-components";


export default function CreateHabit({ visibilityForm, setVisibilityForm, setShowForm, setMyHabits}) {
  const [daysOfHabit, setDaysOfHabit] = useState([]);
  const { user } = useContext(UserContext);
  const [habit, setHabit] = useState("");
  const [blocked, setBlocked] = useState(false);
  const { percentageOfHabits, setPercentageOfHabits } = useContext(UserContext);
  function getHabits(){
    const promise = listHabits({
      headers: { Authorization: `Bearer ${user.token}` },
    });
    promise.then((answer) => {
      setMyHabits(answer.data);
    });
    promise.catch((answer) => console.log(answer));
  }
  function sendHabit(event) {
    event.preventDefault();
    if (daysOfHabit.length === 0) {
      alert("Selecione pelo menos um dia");
    } else {
    setBlocked(true);
    const body = { name: habit, days: daysOfHabit };
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const promise = createHabit(body, config);
    promise.then(() => {
      getHabits();
      setShowForm(false);
    });
    promise.catch(() => {
      setBlocked(false);
      alert("Tente novamente");
    });      
    }
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
        <ButtonsForm blocked={blocked}>
          <div
            onClick={() => {
              setVisibilityForm("none");
            }}
          >
            Cancelar
          </div>
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
function Weekday({ children, daysOfHabit, setDaysOfHabit, index, blocked }) {
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
          setDaysOfHabit([...daysOfHabit, index]);
        } else if (!blocked) {
          setBackground("white");
          setColor("#d4d4d4");
          setDaysOfHabit([
            ...daysOfHabit.filter((element) => element !== index),
          ]);
        }
      }}
    >
      {children}
    </WeekdayStyle>
  );
}
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

const ButtonsForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 29px;
  div {
    width: 84px;
    height: 35px;
    color: #52b6ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    margin-left: 23px;
    width: 84px;
    height: 35px;
    background-color: ${(props) => (props.blocked ? "#86CBFC" : "#53B5FC")};
    border-radius: 4.6px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 16px;
  }
`;

const CreateHabitStyle = styled.div`
  max-width: 340px;
  width: 90%;
  height: 180px;
  margin: 20px auto 0 auto;
  background-color: white;
  border-radius: 5px;
  padding: 18px;
  display: ${(props) => props.visibility};
  input {
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
`;
