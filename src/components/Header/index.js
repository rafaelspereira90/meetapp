import React from "react";

import { Container, Menu, Profile } from "./styles";
import ProfileIcon from "../../assets/images/profile_icon2.png";
import Logo from "../../assets/images/logo-white.svg";

const Header = () => (
  <Container>
    <Menu>
      <a href="/#">
        <img src={Logo} alt="MeetApp" />
      </a>
      <a href="/">Início</a>
      <a href="/buscar">Buscar</a>
      <a href="/novoMeetup">Novo meetup</a>
    </Menu>
    <Profile>
      <a href="/profile">
        <img src={ProfileIcon} alt="Perfil" />
      </a>
    </Profile>
  </Container>
);

export default Header;
