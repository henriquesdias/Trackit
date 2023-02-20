import React from "react";

import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Button({ disabled }) {
  return (
    <ButtonForm disabled={disabled} type="submit">
      {!disabled ? (
        "Entrar"
      ) : (
        <ThreeDots color="#FFFFFF" height={80} width={80} />
      )}
    </ButtonForm>
  );
}

const ButtonForm = styled.button`
  height: 45px;
  border: none;
  background-color: ${(props) => (props.disabled ? "#86CBFC" : "#53b5fc")};
  color: white;
  border-radius: 4.64px;
  margin-top: 2px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
