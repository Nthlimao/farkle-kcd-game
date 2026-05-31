import { LoginForm } from "@/components/LoginForm";
import "./styles.css";

const HOME_PAGE_IMAGES = [
  "./assets/images/main_menu_trosecko.png",
  "./assets/images/main_menu_trosecko2.png",
  "./assets/images/main_menu_trosecko6.png",
  "./assets/images/main_menu_kutnohorsko2.png",
  "./assets/images/main_menu_kutnohorsko4.png",
];

function getRandomImage(): string {
  return HOME_PAGE_IMAGES[Math.floor(Math.random() * HOME_PAGE_IMAGES.length)];
}

export default function HomePage() {
  return (
    <div className="home-page">
      {/* <video autoPlay loop muted id="background-video">
        <source src={getRandomVideo()} type="video/mp4" />
      </video> */}
      <img src={getRandomImage()} alt="Background" id="background-video" />
      <div className="home-page-content">
        <div className="col1"></div>
        <div className="col2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
