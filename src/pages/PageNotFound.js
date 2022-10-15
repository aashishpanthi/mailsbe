import { useCallback } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const onCTAButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - Mailsbe</title>
      </Helmet>
      <div className={styles.pageNotFound}>
        <div className={styles.errorDiv}>
          <img
            className={styles.illustrationIcon}
            alt=""
            src="../illustration.svg"
          />
          <div className={styles.containerDiv}>
            <div className={styles.contentDiv}>
              <div className={styles.headingDiv}>
                <div className={styles.badgeDiv}>
                  <img className={styles.icons} alt="" src="../icons.svg" />
                  <div className={styles.textDiv}>404 Error</div>
                </div>
                <div className={styles.titleDiv}>Page not Found</div>
              </div>
              <div className={styles.paragraphDiv}>
                Sorry, the page you are looking for doesn’t exist or has been
                removed. Keep exploring out site:
              </div>
            </div>
            <button
              className={styles.cTAButton}
              autoFocus
              onClick={onCTAButtonClick}
            >
              <div className={styles.labelDiv}>Return to home page</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
