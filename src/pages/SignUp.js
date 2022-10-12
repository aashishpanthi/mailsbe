import styles from '../styles/pages/SignUp.module.css';

import { Helmet } from 'react-helmet';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign up - Nhost</title>
      </Helmet>

      <div className={styles.container}>
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
