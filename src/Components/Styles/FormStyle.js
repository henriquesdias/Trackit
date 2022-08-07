import styled from "styled-components";

const FormStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 303px;
  }
  input {
    height: 45px;
    outline: none;
    margin: 2px 0 2px 0;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-size: 17px;
  }
  p {
    font-size: 14px;
    color: #53b5fc;
    text-decoration: underline;
    margin-top: 25px;
  }
`;
export default FormStyle;