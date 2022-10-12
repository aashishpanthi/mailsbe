import styles from '../styles/components/Spinner.module.css';

import classNames from 'classnames';

const Spinner = ({ size = '' }) => (
  <span
    className={classNames(
      size === 'sm' ? styles['spinner-sm'] : styles.spinner
    )}
  />
);

export default Spinner;
