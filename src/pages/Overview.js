import styles from "../styles/pages/Dashboard.module.css";
import EmailsTable from "../components/EmailsTable";

const Overview = () => {
  return (
    <div className={styles.tableDiv}>
      <div className={styles.cardHeaderDiv}>
        <div className={styles.contentDiv}>
          <div className={styles.textAndSupportingText}>
            <div className={styles.textDiv}>Emails</div>
            <div className={styles.supportingTextDiv}>
              These are the email you sent using mailbes in the last 12 months.
            </div>
          </div>
        </div>
      </div>
      <EmailsTable styles={styles} />
    </div>
  );
};

export default Overview;
