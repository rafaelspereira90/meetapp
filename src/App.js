import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./config/reactotron";
import GlobalStyle from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";
import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Content>
            <GlobalStyle />
            <Routes />
          </Content>
        </Container>
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
