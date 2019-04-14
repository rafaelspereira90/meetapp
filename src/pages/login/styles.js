import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 40px 180px 40px 180px;
  align-items: center;
  width: 350px;
  margin-top: 200px;
  h1 {
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #ffffff;
    align-self: flex-start;
  }
  input {
    color: #e5556e;
    background-color: #191919;
    border: 0px;
    margin: 10px 0px 20px 0px;
    align-self: flex-start;
  }
  ::placeholder {
    opacity: 0.5;
    font-family: Helvetica;
    font-size: 20px;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }
  button {
    background-color: #e5556e;
    color: #fff;
    border: 0;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  img {
    margin-bottom: 30px;
  }
  a {
    opacity: 0.6;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    text-align: left;
    text-decoration: none;
  }
`;
