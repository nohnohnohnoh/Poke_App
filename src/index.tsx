import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
const queryClinet = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClinet}>
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
