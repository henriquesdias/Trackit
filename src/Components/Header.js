import styled from "styled-components";
import trackit from "./images/trackit.png";
import bob from "./images/bob.png";

export default function Header(){
  return (
    <Container>
      <img src={trackit} alt="trackit" />
      <img src={bob} alt="bob esponja" />
    </Container>
  );
}

const Container = styled.header`
  background-color: #126BA5;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`