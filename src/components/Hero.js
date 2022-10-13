import React from "react";

function Hero({ styles }) {
  return (
    <div className={styles.heroDiv}>
      <nav className={styles.headerNav} id="nvbar">
        <a className={styles.logoA}>
          <b className={styles.mailbes}>mailsbe</b>
        </a>
        <div className={styles.menuDiv}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.buttonPrimaryWithIcon2}>
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
          </button>
        </div>
      </nav>
      <div className={styles.contentDiv2}>
        <div className={styles.smartEmailStatusFinderMa}>
          Smart email status finder , made for Everyone
        </div>
        <div className={styles.knowIfYourEmailHasBeenRe}>
          Know if your email has been read
        </div>
        <div className={styles.buttonsDiv}>
          <button className={styles.buttonPrimaryWithIcon1}>
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
          </button>
          <button className={styles.buttonPrimaryWithIconLeft} autoFocus>
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
          Create your account . For free of cost
        </div>
      </div>
    </div>
  );
}

export default Hero;
