import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUpDiv}>
      <div className={styles.formDiv}>
        <div className={styles.bGDiv} />
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
          <div className={styles.inputTextStyle3}>
            <div className={styles.inputLabelDiv}>Email Address</div>
            <input
              className={styles.frameInput}
              type="email"
              placeholder="i.e. aashish@mail.com"
              required
            />
          </div>
          <input
            className={styles.inputTextStyle5}
            type="text"
            placeholder={`First & Last Name`}
          />
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
          <Link className={styles.alreadyHaveAnAccountSign} to="/sign-in">
            <span className={styles.alreadyHaveAnContainer}>
              <span
                className={styles.alreadyHaveAn}
              >{`Already have an account? `}</span>
              <span className={styles.signInSpan}>Sign in</span>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
