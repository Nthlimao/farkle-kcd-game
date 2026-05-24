import { LoginForm } from "@/components/LoginForm";
import "./styles.css";

const HOME_PAGE_VIDEOS = [
  "./src/assets/videos/main_menu_trosecko.mp4",
  "./src/assets/videos/main_menu_trosecko2.mp4",
  "./src/assets/videos/main_menu_trosecko6.mp4",
  "./src/assets/videos/main_menu_kutnohorsko2.mp4",
  "./src/assets/videos/main_menu_kutnohorsko4.mp4",
];

function getRandomVideo(): string {
  return HOME_PAGE_VIDEOS[Math.floor(Math.random() * HOME_PAGE_VIDEOS.length)];
}

export default function HomePage() {
  return (
    <div className="home-page">
      <video autoPlay loop muted id="background-video">
        <source src={getRandomVideo()} type="video/mp4" />
      </video>
      <div className="home-page-content">
        <div className="col1"></div>
        <div className="col2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
