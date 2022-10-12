import styles from '../styles/pages/SignIn.module.css';

import { Helmet } from 'react-helmet';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign in - Nhost</title>
      </Helmet>

      <div className={styles.container}>
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;
