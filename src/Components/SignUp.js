import logo from "./images/logo-principal.png";
import Container from "./Styles/Container";
import { Link } from "react-router-dom";

export default function SignUp(){
  return (
    <Container>
      <img src={logo} alt="trackit" />
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />
        <button>Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}