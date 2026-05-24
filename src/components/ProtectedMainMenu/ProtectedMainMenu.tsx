import HomePage from "@/pages/HomePage";
import MainMenuPage from "@/pages/MainMenuPage";
import { getAuthToken } from "@/app/auth/session.ts";

export default function ProtectedMainMenu() {
  if (!getAuthToken()) {
    return <HomePage />;
  }

  return <MainMenuPage />;
}
