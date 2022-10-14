import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useSignOut } from "@nhost/react";

const Sidebar = ({ styles, user, setPopUp }) => {
  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const onLogOutButtonClick = useCallback(() => {
    signOut();
    navigate("/");
  }, [navigate]);

  const name = user?.metadata?.name ? user?.metadata?.name : user.displayName;
  const email = user.email;

  const image = user.avatarUrl.includes("gravatar.com")
    ? user.avatarUrl
    : `https://img.icons8.com/external-linector-lineal-linector/344/external-avatar-man-avatar-linector-lineal-linector-6.png`;

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
      <button
        className={styles.cTAButton}
        autoFocus
        onClick={() => setPopUp(true)}
      >
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
          <img
            className={styles.image1Icon}
            alt={name.substring(0, 1)}
            src={image}
          />
          <div className={styles.textAndSupportingText}>
            <div className={styles.titleDiv}>{name}</div>
            <div className={styles.aashishpanthi11gmailcomDiv}>{email}</div>
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
