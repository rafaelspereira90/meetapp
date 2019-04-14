import styled from "styled-components";

export const Card = styled.div`
  flex-grow: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 290px;
  height: 200px;
  border-radius: 5px;
  margin: 25px 20px 25px 20px;
  img {
    width: 100%;
  }
`;

export const CardInfo = styled.div`
  padding: 2px 16px;
  background-color: #fff;
  h1 {
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #222222;
    text-align: left;
  }
  span {
    font-family: Helvetica;
    font-size: 14px;
    color: #999999;
    text-align: left;
  }
  button {
    background-color: #e5556e;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0px;
    text-align: center;
    margin-left: 130px;
    a {
      text-decoration: none;
    }
    span {
      color: #fff;
    }
  }
`;
