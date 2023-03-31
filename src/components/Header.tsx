import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { darkMode } from "../atom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface DarkModeProps {
  darkModeState: boolean;
}

const Header = () => {
  const [darkModeState, setDarkModeState] = useRecoilState(darkMode);
  const onCilckMoon = () => {
    setDarkModeState(false);
  };
  const onClickSun = () => {
    setDarkModeState(true);
  };
  return (
    <HeaderBox>
      <HeaderLogo>PokeMon</HeaderLogo>
      <DarkToggle darkModeState={darkModeState}>
        <BsFillSunFill onClick={onCilckMoon} className="sun" />
        <BsFillMoonFill onClick={onClickSun} className="moon" />
      </DarkToggle>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  width: 100vw;
  height: 10vh;
  ${({ theme }) => theme.flexMixIn("center", "center")}
  background-color: ${({ theme }) => theme.bgColor};
  position: relative;
`;
const DarkToggle = styled.div<DarkModeProps>`
  border-radius: 20px;
  box-shadow: 4px 5px 10px rgb(0 0 0 / 50%);
  width: 100px;
  height: 50px;
  ${({ theme }) => theme.flexMixIn("space-around", "center")}
  background-color: white;
  font-size: 25px;
  ${({ theme }) => theme.postionMixin("absolute", 70, 90)}
  .sun {
    cursor: pointer;
    color: ${({ darkModeState }) => (darkModeState ? "none" : "skyblue")};
  }
  .moon {
    cursor: pointer;
    color: ${({ darkModeState }) => (darkModeState ? "skyblue" : "none")};
  }
`;

const HeaderLogo = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

export default Header;
