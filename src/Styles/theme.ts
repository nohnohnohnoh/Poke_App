import media from "./media";

export const theme = {
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
