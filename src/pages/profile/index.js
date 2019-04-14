import React, { Component } from "react";
import { Container, Content } from "./styles";
import Header from "../../components/Header";

class Profile extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <h1>Nome</h1>
          <input type="text" placeholder="Digite seu e-mail" />
          <h1>Senha</h1>
          <input type="text" placeholder="Sua senha secreta" />
          <h1>Confirmação de Senha</h1>
          <input type="text" placeholder="Sua senha secreta" />
          <h1>Preferências</h1>
          <div className="checks">
            <div>
              <input type="checkbox" name="Front-end" id="squaredOne" />
              <label htmlFor="Front-end">Front-end</label>
            </div>
            <div>
              <input type="checkbox" name="Back-end" />
              <label htmlFor="Back-end">Back-end</label>
            </div>
            <div>
              <input type="checkbox" name="Mobile" />
              <label htmlFor="Mobile">Mobile</label>
            </div>
            <div>
              <input type="checkbox" name="Devops" />
              <label htmlFor="Devops">Devops</label>
            </div>
            <div>
              <input type="checkbox" name="Gestão" />
              <label htmlFor="Gestão">Gestão</label>
            </div>
            <div>
              <input type="checkbox" name="Marketing" />
              <label htmlFor="Marketing">Marketing</label>
            </div>
          </div>
          <button type="button">Salvar</button>
        </Content>
      </Container>
    );
  }
}

export default Profile;
