import { DefaultTheme } from "styled-components";
import media from "./media";

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "white",
  media,
  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
  postionMixin: (postion: string, top: number, left: number) => `
    position: ${postion};
    top: ${top}%;
    left:${left}%;
    transform: translate(-${top}%, -${left}%);
  `,
};

export const lightTheme: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "black",
  media,
  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
  postionMixin: (postion: string, top: number, left: number) => `
    position: ${postion};
    top: ${top}%;
    left:${left}%;
    transform: translate(-${top}%, -${left}%);
  `,
};
