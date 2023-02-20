import logo from "./images/logo-principal.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signUp } from "./ServiceAxios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import FormStyle from "./Styles/FormStyle";
import React from "react";

export default function SignUp() {
  const [blocked, setBlocked] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    if (form.image.slice(0, 4) !== "http") {
      alert("Coloque um formato válido de imagem");
    } else {
      setBlocked(true);
      const promise = signUp(form);
      promise.then((answer) => {
        navigate("/");
      });
      promise.catch((answer) => {
        alert("Dados inválidos/já existentes");
        setBlocked(false);
      });
    }
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
          name="email"
          onChange={handleForm}
          value={form.email}
          readOnly={blocked}
          required
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleForm}
          value={form.password}
          readOnly={blocked}
          required
        />
        <input
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleForm}
          value={form.name}
          readOnly={blocked}
          required
        />
        <input
          type="text"
          placeholder="foto"
          name="image"
          onChange={handleForm}
          value={form.image}
          readOnly={blocked}
          required
        />
        <ButtonForm type="submit" disabled={blocked}>
          {!blocked ? (
            "Cadastrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          )}
        </ButtonForm>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </FormStyle>
  );
}

const ButtonForm = styled.button`
  height: 45px;
  border: none;
  background-color: ${(props) => (props.block ? "#86CBFC" : "#53b5fc")};
  color: white;
  border-radius: 4.64px;
  margin-top: 2px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
