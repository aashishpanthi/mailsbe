import { Link, Navigate } from "react-router-dom";
import styles from "../styles/pages/SignUp.module.css";
import { useSignUpEmailPassword } from "@nhost/react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet";

const SignUp = ({ nhost }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    signUpEmailPassword(email, password, {
      displayName: name,
      metadata: {
        name,
      },
    });
  };

  const handleGoogleSignUp = () => {
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
        <title>Sign Up - Mailsbe</title>
      </Helmet>
      <div className={styles.signUpDiv}>
        {needsEmailVerification ? (
          <p className={styles.verification}>
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : (
          <div className={styles.formDiv}>
            <div className={styles.titleDiv}>
              <div className={styles.joinUsToday}>Join us today 👋</div>
              <div className={styles.createAnAccountToStartUsi}>
                Create an account to start using mailsbe from today, completely
                free.
              </div>
              <button className={styles.button} onClick={handleGoogleSignUp}>
                <div className={styles.buttonPrimaryWithIconDiv}>
                  <div className={styles.frameDiv}>
                    <div className={styles.buttonNameDiv}>
                      {" "}
                      Sign up with Google
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
                  src="../google-21.svg"
                />
              </button>
            </div>
            <form
              className={styles.inputContentForm}
              id="sign-up-form"
              onSubmit={handleOnSubmit}
            >
              <div className={styles.inputBox}>
                <div className={styles.inputLabelDiv}>First & Last name</div>
                <input
                  className={styles.frameInput}
                  type="text"
                  placeholder="i.e. Aashish Panthi"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={disableForm}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <div className={styles.inputLabelDiv}>Email Address</div>
                <input
                  className={styles.frameInput}
                  type="email"
                  placeholder="i.e. aashish@mail.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={disableForm}
                  required
                />
              </div>

              <div className={styles.inputBox}>
                <div className={styles.inputLabelDiv}>Password</div>
                <input
                  className={styles.frameInput}
                  type="password"
                  placeholder="********"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  disabled={disableForm}
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
                className={styles.buttonPrimaryWithIcon}
                type="submit"
                disabled={disableForm}
              >
                {isLoading ? (
                  <Spinner size="sm" />
                ) : (
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
                )}
              </button>

              {isError ? (
                <p className={styles.error}>{error?.message}</p>
              ) : null}

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
        )}
      </div>
    </>
  );
};

export default SignUp;
