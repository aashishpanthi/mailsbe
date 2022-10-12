import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeDiv}>
      <footer className={styles.footer}>
        <div className={styles.bGDiv} />
        <div className={styles.widget0Div}>
          <div className={styles.weAreHereToHelpYouSuceed}>
            We are here to help you suceed in your digital journey by helping
            you in your everyday journey. We help you to find out if the
            receiver has read the email or not.
          </div>
          <b className={styles.hELPMENUB}>About Mailbes</b>
          <div className={styles.socialDiv}>
            <a
              className={styles.a}
              href="https://twitter.com/aashishpanthi11"
              target="_blank"
            >
              <img
                className={styles.logoTwitter2Icon}
                alt=""
                src="../logotwitter-2.svg"
              />
            </a>
            <a
              className={styles.a1}
              href="https://facebook.com/aashishpanthi11"
              target="_blank"
            >
              <img
                className={styles.logoFbSimple2Icon}
                alt=""
                src="../logofbsimple-2.svg"
              />
            </a>
            <a
              className={styles.a2}
              href="https://instagram.com/aashishpanthi11"
              target="_blank"
            >
              <img
                className={styles.logoInstagram1Icon}
                alt=""
                src="../logoinstagram-1.svg"
              />
            </a>
            <a className={styles.a3} href="https://github.com/aashishpanthi">
              <img
                className={styles.logoGithub1Icon}
                alt=""
                src="../logogithub-1.svg"
              />
            </a>
          </div>
        </div>
        <div className={styles.widget1Div}>
          <a className={styles.career}>{`Career  `}</a>
          <a className={styles.worksA}>{`Works `}</a>
          <a className={styles.features}>{`Features          `}</a>
          <a
            className={styles.about}
            href="https://blog.aashish-panthi.com.np/"
          >{`About     `}</a>
          <b className={styles.hELPMENUB1}>Company</b>
        </div>
        <div className={styles.widget2Div}>
          <div className={styles.aboutFeaturesWorks}>
            <p className={styles.customerSupport}>
              <span>Customer Support</span>
            </p>
            <p className={styles.serviceDetails}>
              <span>Service Details</span>
            </p>
            <p className={styles.customerSupport}>
              <span>{`Terms & Conditions`}</span>
            </p>
            <p className={styles.privacyPolicy}>
              <span>Privacy Policy</span>
            </p>
          </div>
          <b className={styles.hELPMENUB}>Help</b>
        </div>
        <div className={styles.contentDiv}>
          <b className={styles.pricingPlans}>
            Help us grow 💪 by contributing on GitHub
          </b>
          <button className={styles.buttonPrimaryWithIcon}>
            <div className={styles.frameDiv}>
              <b className={styles.buttonName}>Contribute now</b>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconOutlinearrowRight}
                  alt=""
                  src="../iconoutlinearrowright.svg"
                />
              </div>
            </div>
          </button>
        </div>
        <div className={styles.lineDiv} />
      </footer>
      <div className={styles.featureDiv}>
        <div className={styles.listDiv}>
          <div className={styles.div}>
            <b className={styles.sendB}>Send</b>
            <div className={styles.sendEmailDirectlyFromTheD}>
              Send email directly from the dashboard if you are using gmail.
            </div>
            <img className={styles.sendIcon} alt="" src="../send@2x.png" />
          </div>
          <div className={styles.div1}>
            <b className={styles.statusB}>Status</b>
            <div className={styles.knowIfTheUserReadTheEmai}>
              Know if the user read the email or not.
            </div>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          </div>
          <div className={styles.div2}>
            <b className={styles.historyB}>History</b>
            <div className={styles.findOutExactlyWhenTheRece}>
              Find out exactly when the receiver read your mail.
            </div>
            <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          </div>
          <img className={styles.linesIcon} alt="" src="../lines.svg" />
        </div>
        <div className={styles.contentDiv1}>
          <b className={styles.useEmailLikeAGeek}>Use email like a geek</b>
          <div className={styles.exploreTheUnexploredPotenti}>
            Explore the unexplored potential of email
          </div>
        </div>
      </div>
      <nav className={styles.videoNav} id="video-container">
        <iframe
          className={styles.bGIframe}
          src="https://www.youtube.com/embed/HhjHYkPQ8F0?rel=0"
          frameBorder="0"
          allowFullScreen
        />
      </nav>
      <div className={styles.heroDiv}>
        <div className={styles.contentDiv2}>
          <div className={styles.knowIfYourEmailHasBeenRe}>
            Know if your email has been read
          </div>
          <div className={styles.smartEmailStatusFinderMa}>
            Smart email status finder , made for Everyone
          </div>
          <div className={styles.createYourAccountForFree}>
            Create your account . For free of cost
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
        </div>
        <nav className={styles.headerNav} id="nvbar">
          <a className={styles.logoA}>
            <b className={styles.mailbes}>mailbes</b>
          </a>
          <div className={styles.menuDiv}>
            <button className={styles.loginButton}>Login</button>
          </div>
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
        </nav>
      </div>
    </div>
  );
};

export default Home;
