import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 100px 280px 20px 500px;
  align-items: center;
  width: 350px;
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
  .checks {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-self: flex-start;
    margin-top: 10px;
    input[type="checkbox"] {
      visibility: hidden;
      margin-right: 8px;
      cursor: pointer;
    }
    input[type="checkbox"]:before {
      content: "";
      background-color: #333;
      display: inline-block;
      margin-right: 15px;
      width: 18px;
      height: 18px;
      visibility: visible;
      border-radius: 4px;
    }
    input[type="checkbox"]:checked:before {
      background-color: #e5556e;
    }
    label {
      margin-left: 5px;
      font-family: Helvetica;
      font-size: 18px;
      color: #ffffff;
      text-align: left;
    }
  }
`;
