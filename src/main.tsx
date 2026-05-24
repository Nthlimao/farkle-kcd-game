import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GraphqlProvider from "./app/graphql/provider.graphql.tsx";

import { RouterProvider } from "react-router/dom";
import router from "./app/router.tsx";

import "./shared/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GraphqlProvider>
      <RouterProvider router={router} />
    </GraphqlProvider>
  </StrictMode>,
);
