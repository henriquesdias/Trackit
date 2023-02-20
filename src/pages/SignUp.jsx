import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../images/logo-principal.png";
import { signUp } from "../components/ServiceAxios";
import FormStyle from "../styles/FormStyle";
import Button from "../components/Button";

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
      return alert("Coloque um formato válido de imagem");
    }
    setBlocked(true);
    signUp(form)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Dados inválidos/já existentes");
        setBlocked(false);
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
          value={form.email}
          readOnly={blocked}
          required
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={form.password}
          readOnly={blocked}
          required
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="nome"
          name="name"
          value={form.name}
          readOnly={blocked}
          required
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="foto"
          name="image"
          value={form.image}
          readOnly={blocked}
          required
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
        />
        <Button disabled={blocked} />
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </FormStyle>
  );
}
