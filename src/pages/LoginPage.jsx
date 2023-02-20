import React from "react";
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../images/logo-principal.png";
import FormStyle from "../styles/FormStyle";
import { login } from "../components/ServiceAxios";
import UserContext from "../context/UserContext";
import Button from "../components/Button";

export default function LoginPage() {
  const [blocked, setBlocked] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function submitData(event) {
    event.preventDefault();
    setBlocked(true);
    login(form)
      .catch(() => {
        alert("Dados inválidos");
        setBlocked(false);
      })
      .then((answer) => {
        setUser(answer.data);
        navigate("/hoje");
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
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
          required
        />
        <input
          type="password"
          placeholder="senha"
          readOnly={blocked}
          name="password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
          required
        />
        <Button disabled={blocked} />
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </FormStyle>
  );
}
