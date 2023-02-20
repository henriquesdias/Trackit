import styled from "styled-components";

import { Link } from "react-router-dom";

export const FooterLink = styled(Link)`
  text-decoration: none;
`;
export const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 36px;
  padding-right: 36px;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
  p {
    color: #52b6ff;
  }
  div {
    width: 100px;
    height: 100px;
    position: relative;
  }
`;
export const CircularProgress = styled.span`
  position: absolute;
  z-index: 2;
  bottom: 30px;
`;
