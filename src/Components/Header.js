import styled from "styled-components";
import trackit from "./images/trackit.png";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function Header(){
  const {user , setUser} = useContext(UserContext);
  return (
    <HeaderStyle>
      <img src={trackit} alt="trackit" />
      <ImageProfile>
        <img src={user.image} alt="image profile" />
      </ImageProfile>
    </HeaderStyle>
  );
}
const ImageProfile = styled.div`
  width: 51px;
  height: 51px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
const HeaderStyle = styled.header`
  background-color: #126BA5;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
`