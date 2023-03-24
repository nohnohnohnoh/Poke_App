import { createBrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DetailPokeMon from "./PokeMon/DetailPokeMon";
import PokeMon from "./PokeMon/PokeMon";
import Redering from "./Rendering";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Redering />,
      },
      {
        path: "pokemon",
        element: <PokeMon />,
      },
      {
        path: "pokemon/:pokemonId",
        element: <DetailPokeMon />,
      },
    ],
  },
]);

export default Router;
