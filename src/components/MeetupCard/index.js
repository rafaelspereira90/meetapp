import React, { Fragment } from "react";

import { Card, CardInfo } from "./styles";
import MeetupImg from "../../assets/images/meetup.jpg";

const MeetupCard = () => (
  <Fragment>
    <Card>
      <a href="/#">
        <img src={MeetupImg} alt="MeetApp" />
      </a>
      <CardInfo>
        <h1>Meetup React Native</h1>
        <span>120 membros</span>
        <button>
          <a href="/meetup/1">
            <span>></span>
          </a>
        </button>
      </CardInfo>
    </Card>
    <Card>
      <a href="/#">
        <img src={MeetupImg} alt="MeetApp" />
      </a>
      <CardInfo>
        <h1>Meetup React Native</h1>
        <span>120 membros</span>
        <button href="/#">
          <span>></span>
        </button>
      </CardInfo>
    </Card>
    <Card>
      <a href="/#">
        <img src={MeetupImg} alt="MeetApp" />
      </a>
      <CardInfo>
        <h1>Meetup React Native</h1>
        <span>120 membros</span>
        <button href="/#">
          <span>></span>
        </button>
      </CardInfo>
    </Card>
  </Fragment>
);

export default MeetupCard;
