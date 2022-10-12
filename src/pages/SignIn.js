import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signInDiv}>
      <div className={styles.formDiv}>
        <div className={styles.bGDiv} />
        <div className={styles.titleDiv}>
          <div className={styles.welcomeBack}>Welcome back 👋</div>
          <div className={styles.fIllInTheRequiredDetailsT}>
            FIll in the required details to start using your account, and enjoy
            mailsbe.
          </div>
          <div className={styles.buttonDiv}>
            <div className={styles.buttonPrimaryWithIconDiv}>
              <div className={styles.frameDiv}>
                <div className={styles.buttonNameDiv}> Sign in with Google</div>
                <div className={styles.iconDiv}>
                  <img
                    className={styles.iconOutlinearrowRight}
                    alt=""
                    src="../iconoutlinearrowright.svg"
                  />
                </div>
              </div>
            </div>
            <img className={styles.google2Icon} alt="" src="../google-2.svg" />
          </div>
        </div>
        <form className={styles.inputContentForm} method="post">
          <div className={styles.inputTextStyle3}>
            <div className={styles.inputLabelDiv}>Email Address</div>
            <input
              className={styles.frameInput}
              type="email"
              placeholder="i.e. aashish@mail.com"
              required
            />
          </div>
          <div className={styles.inputTextStyle4}>
            <div className={styles.inputLabelDiv}>Password</div>
            <input
              className={styles.frameInput1}
              type="password"
              placeholder="********"
              minLength={6}
              required
            />
          </div>
          <div className={styles.checkDiv}>
            <div className={styles.rememberMeDiv}>Remember me</div>
            <input
              className={styles.shapeInput}
              type="checkbox"
              defaultChecked={true}
            />
          </div>
          <button className={styles.buttonPrimaryWithIcon}>
            <div className={styles.frameDiv}>
              <div className={styles.buttonNameDiv1}>Sign in</div>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconOutlinearrowRight}
                  alt=""
                  src="../iconoutlinearrowright1.svg"
                />
              </div>
            </div>
          </button>
          <Link className={styles.dontHaveAnAccountCreate} to="/sign-up">
            <span className={styles.dontHaveAnContainer}>
              <span
                className={styles.dontHaveAn}
              >{`Don't have an account? `}</span>
              <span className={styles.createFreeAccount}>
                Create free account
              </span>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
