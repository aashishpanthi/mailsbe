import styles from "../styles/pages/Home.module.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
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
      {/* <Footer styles={styles} /> */}
    </div>
  );
};

export default Home;
