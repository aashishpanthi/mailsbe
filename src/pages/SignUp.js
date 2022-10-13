import { Link } from "react-router-dom";
import styles from "../styles/pages/SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpDiv}>
      <div className={styles.formDiv}>
        <div className={styles.titleDiv}>
          <div className={styles.joinUsToday}>Join us today 👋</div>
          <div className={styles.createAnAccountToStartUsi}>
            Create an account to start using mailsbe from today, completely
            free.
          </div>
          <button className={styles.button}>
            <div className={styles.buttonPrimaryWithIconDiv}>
              <div className={styles.frameDiv}>
                <div className={styles.buttonNameDiv}> Sign up with Google</div>
                <div className={styles.iconDiv}>
                  <img
                    className={styles.iconOutlinearrowRight}
                    alt=""
                    src="../iconoutlinearrowright.svg"
                  />
                </div>
              </div>
            </div>
            <img className={styles.google2Icon} alt="" src="../google-21.svg" />
          </button>
        </div>
        <form
          className={styles.inputContentForm}
          method="post"
          id="sign-up-form"
        >
          <div className={styles.inputBox}>
            <div className={styles.inputLabelDiv}>First & Last name</div>
            <input
              className={styles.frameInput}
              type="text"
              placeholder="i.e. Aashish Panthi"
              required
            />
          </div>
          <div className={styles.inputBox}>
            <div className={styles.inputLabelDiv}>Email Address</div>
            <input
              className={styles.frameInput}
              type="email"
              placeholder="i.e. aashish@mail.com"
              required
            />
          </div>

          <div className={styles.inputBox}>
            <div className={styles.inputLabelDiv}>Password</div>
            <input
              className={styles.frameInput}
              type="password"
              placeholder="********"
              minLength={6}
              required
            />
          </div>
          <div className={styles.checkDiv}>
            <input
              className={styles.shapeInput}
              type="checkbox"
              defaultChecked={true}
              id="remember-me"
            />
            <label for="remember-me" className={styles.rememberMeDiv}>
              Remember me
            </label>
          </div>
          <button className={styles.buttonPrimaryWithIcon}>
            <div className={styles.frameDiv}>
              <div className={styles.buttonNameDiv1}>Create Account</div>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconOutlinearrowRight}
                  alt=""
                  src="../iconoutlinearrowright1.svg"
                />
              </div>
            </div>
          </button>
          <div className={styles.alreadyHaveAnAccountSign}>
            <span className={styles.alreadyHaveAnContainer}>
              <span
                className={styles.alreadyHaveAn}
              >{`Already have an account? `}</span>
              <Link to="/sign-in" className={styles.signInSpan}>
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
