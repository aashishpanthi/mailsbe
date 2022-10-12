import styles from '../styles/components/Input.module.css';

const Input = ({ type = 'text', label = '', ...props }) => {
  return (
    <div className={styles.container}>
      {label ? <label className={styles.label}>{label}</label> : null}
      <input type={type} className={styles.input} {...props} />
    </div>
  );
};

export default Input;
