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
  margin: 40px 580px 20px 580px;
  h1 {
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #ffffff;
    text-align: left;
  }
  input {
    color: #e5556e;
    background-color: #191919;
    border: 0px;
    margin: 10px 0px 20px 0px;
  }
  ::placeholder {
    opacity: 0.5;
    font-family: Helvetica;
    font-size: 20px;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }
  label {
    margin-left: 10px;
  }
  button {
    background-color: #e5556e;
    color: #fff;
    border: 0;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
  #img {
    border: 2px;
    border-color: #666666;
    border-style: dashed;
    text-align: center;
    margin: 10px 0px 20px 0px;
    img {
      padding: 40px 30px 35px 30px;
    }
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
