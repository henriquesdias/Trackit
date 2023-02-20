import React from "react";
import { useState } from "react";

import styled from "styled-components";

export function Weekday({
  children,
  daysOfHabit,
  setDaysOfHabit,
  index,
  blocked,
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
