import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Content } from "./styles";
import CameraIcon from "../../assets/images/cam1.png";

class newMeetup extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <h1>Título</h1>
          <input type="text" placeholder="Digite o título do Meetup" />
          <h1>Descrição</h1>
          <input type="text" placeholder="Descreva seu Meetup" />
          <h1>Imagem</h1>
          <div id="img">
            <a href="/#">
              <img src={CameraIcon} alt="Upload da Imagem" />
            </a>
          </div>
          <h1>Localização</h1>
          <input type="text" placeholder="Onde seu Meetup irá acontecer?" />
          <h1>Tema do Meetup</h1>
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

export default newMeetup;
