import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 40px 180px 40px 180px;
  align-items: center;
  img {
    width: 100%;
    height: 320px;
  }
`;
export const MeetupInfo = styled.div`
  flex: 1;
  flex-direction: column;
  width: 400px;
  align-content: center;
  h1 {
    font-family: Helvetica-Bold;
    font-size: 24px;
    color: #ffffff;
    text-align: left;
    margin-top: 20px;
  }
  span {
    font-family: Helvetica;
    font-size: 14px;
    color: #999999;
    text-align: justify;
  }
  p {
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  button {
    background-color: #e5556e;
    color: #fff;
    border: 0;
    border-radius: 20px;
    height: 50px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 100px;
  }
`;
