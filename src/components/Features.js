import React from "react";

function Features({ styles }) {
  return (
    <div className={styles.featureDiv}>
      <div className={styles.contentDiv1}>
        <b className={styles.useEmailLikeAGeek}>Use email like a geek</b>
        <div className={styles.exploreTheUnexploredPotenti}>
          Explore the unexplored potential of email
        </div>
      </div>
      <div className={styles.listDiv}>
        <div className={styles.div}>
          <img className={styles.sendIcon} alt="" src="../send@2x.png" />
          <b className={styles.sendB}>Send</b>
          <div className={styles.sendEmailDirectlyFromTheD}>
            Compose a new email with pixel tracking enabled.
          </div>
        </div>
        <div className={styles.div1}>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          <b className={styles.statusB}>Status</b>
          <div className={styles.knowIfTheUserReadTheEmai}>
            Know if the user read the email or not.
          </div>
        </div>
        <div className={styles.div2}>
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          <b className={styles.historyB}>History</b>
          <div className={styles.findOutExactlyWhenTheRece}>
            Find out exactly when the receiver read your mail.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
