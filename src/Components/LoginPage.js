import logo from "./images/logo-principal.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormStyle from "./Styles/FormStyle";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { login } from "./ServiceAxios";
import UserContext from "./UserContext";


export default function LoginPage(){
  const [blocked , setBlocked] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  useEffect( () => {
  if (localStorage.getItem("userLogin") !== null) {
    const infoUserSerialized = localStorage.getItem("userLogin");
    const userStorage = JSON.parse(infoUserSerialized);
    setUser(userStorage);
    navigate("/hoje");
  }
  })
  function submitData(event){
    event.preventDefault();
    setBlocked(true);
    const promise = login(form);
    promise.catch( () => {
      alert("Dados inválidos")
      setBlocked(false);
    });
    promise.then( answer => {
      setUser(answer.data)
      navigate("/hoje");
    });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <FormStyle>
      <img src={logo} alt="trackit" />
      <form onSubmit={submitData}>
        <input
          type="email"
          placeholder="email"
          readOnly={blocked}
          name="email"
          value={form.email}
          onChange={handleForm}
          required
        />
        <input
          type="password"
          placeholder="senha"
          readOnly={blocked}
          name="password"
          value={form.password}
          onChange={handleForm}
          required
        />
        <ButtonForm disabled={blocked} type="submit">
          {!blocked ? (
            "Entrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          )}
        </ButtonForm>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </FormStyle>
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
