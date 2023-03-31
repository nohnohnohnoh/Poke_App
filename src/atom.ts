import { atom } from "recoil";

export const darkMode = atom({
  key: "darkmode",
  default: false,
});

export const pokeMonState = atom({
  key: "pokemonstate",
  default: [],
});
