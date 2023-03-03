import { useContext } from "react";

import trackit from "../images/trackit.png";
import UserContext from "../context/UserContext";
import { HeaderStyle, ImageProfile } from "../styles/HeaderStyle";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  return (
    <HeaderStyle>
      <img src={trackit} alt="trackit" />
      <ImageProfile>
        <img src={user.image} alt="image profile" />
      </ImageProfile>
    </HeaderStyle>
  );
}
