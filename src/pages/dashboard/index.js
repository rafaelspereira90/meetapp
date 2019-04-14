import React, { Component } from "react";
import Header from "../../components/Header";
import MeetupCard from "../../components/MeetupCard";
import { Container, Content } from "./styles";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <MeetupCard />
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
