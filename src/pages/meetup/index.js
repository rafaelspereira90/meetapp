import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Content, MeetupInfo } from "./styles";
import ImgMeetup from "../../assets/images/palestra.png";

class Meetup extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <img src={ImgMeetup} alt="Imagem do Meetup" />
          <MeetupInfo>
            <h1>Meetup React Native</h1>
            <span>120 membros</span>
            <p>
              O meetup de React Native é um espaço para discutir sobre
              tecnologias por volta do desenvolvimento web utilizando a
              biblioteca do Facebook para criação de interfaces móveis
              multiplataforma com Javascript.
            </p>
            <span>Realizado em:</span>
            <p>Rua Guilherme Gembala, 260, Rio do Sul - SC</p>
            <button type="button">Inscreva-se</button>
          </MeetupInfo>
        </Content>
      </Container>
    );
  }
}

export default Meetup;
