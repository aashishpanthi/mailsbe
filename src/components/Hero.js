import React from "react";
import { Link } from "react-router-dom";

function Hero({ styles }) {
  const handleScroll = () => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.heroDiv}>
      <nav className={styles.headerNav} id="nvbar">
        <a className={styles.logoA}>
          <b className={styles.mailbes}>mailsbe</b>
        </a>
        <div className={styles.menuDiv}>
          <Link to="/sign-in" className={styles.loginButton}>
            Login
          </Link>
          <Link to="/sign-up" className={styles.buttonPrimaryWithIcon2}>
            <div className={styles.frameDiv}>
              <b className={styles.buttonName3}>Sign up</b>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconOutlinearrowRight}
                  alt=""
                  src="../iconoutlinearrowright6.svg"
                />
              </div>
            </div>
          </Link>
        </div>
      </nav>
      <div className={styles.contentDiv2}>
        <div className={styles.smartEmailStatusFinderMa}>
          Smart email status finder, made for Everyone
        </div>
        <div className={styles.knowIfYourEmailHasBeenRe}>
          Know if your email has been read
        </div>
        <div className={styles.buttonsDiv}>
          <Link to="/sign-up" className={styles.buttonPrimaryWithIcon1}>
            <div className={styles.frameDiv}>
              <b className={styles.buttonName1}>Get started now</b>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconOutlinearrowRight}
                  alt=""
                  src="../iconoutlinearrowright5.svg"
                />
              </div>
            </div>
          </Link>
          <button
            className={styles.buttonPrimaryWithIconLeft}
            autoFocus
            onClick={handleScroll}
          >
            <div className={styles.frameDiv2}>
              <div className={styles.iconDiv2}>
                <img
                  className={styles.iconOutlinearrowRight}
                  alt=""
                  src="../iconoutlineplay.svg"
                />
              </div>
              <b className={styles.buttonName2}>Watch a demo</b>
            </div>
          </button>
        </div>
        <div className={styles.createYourAccountForFree}>
          Create your account. For free of cost
        </div>
      </div>
    </div>
  );
}

export default Hero;
