import React, { Component } from "react";
import Header from "../../components/Header";
import MeetupCard from "../../components/MeetupCard";
import { Container, Content, SearchBox, SearchContent } from "./styles";

class Search extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <SearchBox>
            <input placeholder="Buscar meetups" />
          </SearchBox>
          <SearchContent>
            <MeetupCard />
          </SearchContent>
        </Content>
      </Container>
    );
  }
}

export default Search;
