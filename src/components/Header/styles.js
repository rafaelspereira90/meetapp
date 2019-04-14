import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e5556e;
  height: 60px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 480px;
  padding: 6px 7px 6px 0px;
  a {
    flex: 1;
    font-family: Helvetica-Bold;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 52px;
    height: 52px;
    margin-right: 20px;
  }
`;
