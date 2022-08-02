import styled from "styled-components";
import logo from "./images/logo-principal.png";
export default function LoginPage(){
  return (
    <Container>
      <div>
        <img src={logo} alt="trackit" />
        <form>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="senha"/>
          <button>Entrar</button>
        </form>
        <p>Não tem uma conta? Cadastre-se!</p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Recursive', sans-serif;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input{
    height: 45px;
    outline: none;
    margin: 2px 0 2px 0;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-size: 17px;
  }
  button{
    height: 45px;
    border: none;
    background-color: #53B5FC;
    color: white;
    border-radius: 4.64px;
    margin-top: 2px;
    font-size: 18px;
  }
  p{
    font-size: 14px;
    color: #53B5FC;
    text-decoration: underline;
    margin-top: 25px;
  }
`