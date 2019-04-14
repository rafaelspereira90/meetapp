import styled from "styled-components";
import SearchIcon from "../../assets/images/search.svg";

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
  margin: 20px 180px 20px 180px;
`;

export const SearchContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const SearchBox = styled.div`
  align-items: center;
  height: 35px;
  padding: 6px 7px 6px 26px;
  margin: 25px 20px 25px 20px;
  background: #2c2c2c url(${SearchIcon}) no-repeat 7px center;
  input {
    flex: 1;
    font-family: Helvetica;
    font-size: 15px;
    color: #8e8e93;
    background: #2c2c2c;
    border: 0;
    width: 100%;
    letter-spacing: 0;
    text-align: left;
  }
`;
