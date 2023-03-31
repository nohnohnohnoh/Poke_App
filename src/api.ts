import axios from "axios";

export const BASE_URL = "https://pokeapi.co/api/v2";
const Infinite_URL = `${BASE_URL}/pokemon?offset=0&limit=20`;

export const PoketData = async ({
  pageParam = `${BASE_URL}/pokemon?offset=0&limit=20`,
}) => {
  const { data } = await axios.get(pageParam);
  return data;
};

export const test = async () => {
  const offset = 20 * 1;
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );
  return data;
};
