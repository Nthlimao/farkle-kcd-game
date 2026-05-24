import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage/index.tsx";
import ProtectedMainMenu from "@/components/ProtectedMainMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedMainMenu />,
  },
  {
    path: "/login",
    element: <HomePage />,
  },
]);

export default router;
