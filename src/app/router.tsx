import { createBrowserRouter } from "react-router";
import ProtectedMainMenu from "@/components/ProtectedMainMenu";

const router = createBrowserRouter([
  {
    path: "/farkle-kcd-game/",
    element: <ProtectedMainMenu />,
  }
]);

export default router;
