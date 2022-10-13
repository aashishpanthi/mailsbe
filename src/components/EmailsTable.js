import React from "react";

const EmailsTable = ({ styles }) => {
  return (
    <div className={styles.contentDiv1}>
      <div className={styles.columnDiv}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv}>
            <div className={styles.textDiv1}>Email</div>
            <img
              className={styles.arrowDownIcon}
              alt=""
              src="../arrowdown.svg"
            />
          </div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.supportingTextDiv1}>test@user.com</div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.supportingTextDiv1}>test2@gmail.com</div>
        </div>
      </div>
      <div className={styles.columnDiv1}>
        <div className={styles.tableHeaderCell1}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>Status</div>
          </div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.badgeDiv}>
            <div className={styles.badgeBaseDiv}>
              <div className={styles.textDiv1}>Seen</div>
            </div>
          </div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.badgeDiv}>
            <div className={styles.badgeBaseDiv1}>
              <div className={styles.textDiv1}>Unseen</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.columnDiv2}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>About</div>
          </div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.supportingTextDiv1}>
            Brings all your news into one place
          </div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.supportingTextDiv1}>
            Super lightweight design app
          </div>
        </div>
      </div>
      <div className={styles.columnDiv3}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>Date sent</div>
          </div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.dateDiv}>2022-09-11 5:30AM</div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.dateDiv}>2022-07-11 5:30AM</div>
        </div>
      </div>
      <div className={styles.columnDiv3}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>Date seen</div>
          </div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.dateDiv}>2022-09-11 5:30AM</div>
        </div>
        <div className={styles.tableCellDiv}>
          <div className={styles.dateDiv}>Null</div>
        </div>
      </div>
      <div className={styles.dropdownDiv}>
        <div className={styles.tableHeaderCell8} />
        <button className={styles.tableCellButton}>
          <img
            className={styles.moreVerticalIcon}
            alt=""
            src="../morevertical.svg"
          />
        </button>
        <button className={styles.tableCellButton}>
          <img
            className={styles.moreVerticalIcon}
            alt=""
            src="../morevertical.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default EmailsTable;
