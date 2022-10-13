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
          <b className={styles.sendB}>Send</b>
          <div className={styles.sendEmailDirectlyFromTheD}>
            Compoase a new email with pixel tracking enabled.
          </div>
          <img className={styles.sendIcon} alt="" src="../send@2x.png" />
        </div>
        <div className={styles.div1}>
          <b className={styles.statusB}>Status</b>
          <div className={styles.knowIfTheUserReadTheEmai}>
            Know if the user read the email or not.
          </div>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        </div>
        <div className={styles.div2}>
          <b className={styles.historyB}>History</b>
          <div className={styles.findOutExactlyWhenTheRece}>
            Find out exactly when the receiver read your mail.
          </div>
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
        </div>
      </div>
    </div>
  );
}

export default Features;
