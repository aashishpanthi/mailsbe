import styles from "../styles/pages/Home.module.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { useAuthenticationStatus } from "@nhost/react";
import Spinner from "../components/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }

  return (
    <div className={styles.homeDiv}>
      <Hero styles={styles} />
      <nav className={styles.videoNav} id="video-container">
        <iframe
          className={styles.bGIframe}
          src="https://www.youtube.com/embed/HhjHYkPQ8F0?rel=0"
          frameBorder="0"
          allowFullScreen
        />
      </nav>
      <Features styles={styles} />
      <Footer styles={styles} />
    </div>
  );
};

export default Home;
