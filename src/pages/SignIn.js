import { useSignInEmailPassword } from "@nhost/react";
import { Link, Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useState } from "react";

import styles from "../styles/pages/SignIn.module.css";
import { Helmet } from "react-helmet";

const SignIn = ({ nhost }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignInEmailPassword();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInEmailPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    nhost.auth.signIn({
      provider: "google",
    });
  };

  if (isSuccess) {
    return <Navigate to="/" replace={true} />;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <>
      <Helmet>
        <title>Sign In - Mailsbe</title>
      </Helmet>
      <div className={styles.signInDiv}>
        {needsEmailVerification ? (
          <p className={styles["verification-text"]}>
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : (
          <div className={styles.formDiv}>
            <div className={styles.titleDiv}>
              <div className={styles.welcomeBack}>Welcome back 👋</div>
              <div className={styles.fIllInTheRequiredDetailsT}>
                FIll in the required details to start using your account, and
                enjoy mailsbe.
              </div>
              <div className={styles.buttonDiv} onClick={handleGoogleSignIn}>
                <div className={styles.buttonPrimaryWithIconDiv}>
                  <div className={styles.frameDiv}>
                    <div className={styles.buttonNameDiv}>
                      Sign in with Google
                    </div>
                    <div className={styles.iconDiv}>
                      <img
                        className={styles.iconOutlinearrowRight}
                        alt=""
                        src="../iconoutlinearrowright.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.google2Icon}
                  alt=""
                  src="../google-2.svg"
                />
              </div>
            </div>
            <form className={styles.inputContentForm} onSubmit={handleOnSubmit}>
              <div className={styles.inputTextStyle}>
                <div className={styles.inputLabelDiv}>Email Address</div>
                <input
                  className={styles.frameInput}
                  type="email"
                  placeholder="i.e. aashish@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={disableForm}
                  required
                />
              </div>
              <div className={styles.inputTextStyle}>
                <div className={styles.inputLabelDiv}>Password</div>
                <input
                  className={styles.frameInput}
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={disableForm}
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
                <label htmlFor="remember-me" className={styles.rememberMeDiv}>
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                disabled={disableForm}
                className={styles.buttonPrimaryWithIcon}
              >
                {isLoading ? (
                  <Spinner size="sm" />
                ) : (
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
                )}
              </button>

              {isError ? (
                <p className={styles.error}>{error?.message}</p>
              ) : null}

              <div className={styles.dontHaveAnAccountCreate}>
                <span className={styles.dontHaveAnContainer}>
                  <span
                    className={styles.dontHaveAn}
                  >{`Don't have an account? `}</span>
                  <Link to="/sign-up" className={styles.createFreeAccount}>
                    Create free account
                  </Link>
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default SignIn;
