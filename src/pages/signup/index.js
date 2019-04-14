import React, { Component } from "react";
import { Container, Content } from "./styles";
import Logo from "../../assets/images/logo.svg";

class Signup extends Component {
  render() {
    return (
      <Container>
        <Content>
          <img src={Logo} alt="Logo" />
          <h1>Nome</h1>
          <input type="text" placeholder="Digite seu nome" />
          <h1>Email</h1>
          <input type="text" placeholder="Digite seu e-mail" />
          <h1>Senha</h1>
          <input type="text" placeholder="Sua senha secreta" />
          <button type="button">Criar conta</button>
          <a href="/login">Já tenho conta</a>
        </Content>
      </Container>
    );
  }
}

export default Signup;
