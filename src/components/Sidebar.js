import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Sidebar = ({ styles }) => {
  const navigate = useNavigate();

  const onLogOutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.sideBarDiv}>
      <Link className={styles.logoA} to="/">
        <img
          className={styles.contactMailIcon}
          alt=""
          src="../contact-mail.svg"
        />
        <div className={styles.mAILBESDiv}>MAILSBE</div>
      </Link>
      <button className={styles.cTAButton} autoFocus>
        <img className={styles.arrowDownIcon} alt="" src="../icon.svg" />
        <div className={styles.buttonDiv}>Compose mail</div>
      </button>
      <div className={styles.menuDiv}>
        <div className={styles.titleDiv}>Menu</div>
        <div className={styles.navDiv}>
          <Link to="/app" className={styles.overviewA}>
            <img className={styles.icon1} alt="" src="../icon1.svg" />
            <div className={styles.overviewDiv}>Overview</div>
          </Link>
        </div>
      </div>
      <Link to="/app/profile" className={styles.notifications}>
        <img className={styles.icon1} alt="" src="../icon3.svg" />
        <div className={styles.overviewDiv}>Settings</div>
      </Link>
      <div className={styles.divider} />
      <div className={styles.menuDiv}>
        <div className={styles.titleDiv}>Profile</div>
        <div className={styles.frameDiv2}>
          <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
          <div className={styles.textAndSupportingText}>
            <div className={styles.titleDiv}>Aashish Panthi</div>
            <div className={styles.aashishpanthi11gmailcomDiv}>
              aashishpanthi11@gmail.com
            </div>
          </div>
        </div>
      </div>
      <button className={styles.logOutButton} onClick={onLogOutButtonClick}>
        <img
          className={styles.moreVerticalIcon}
          alt=""
          src="../left-icon.svg"
        />
        <div className={styles.layoutDiv}>
          <div className={styles.labelDiv}>Log out</div>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
