import { Link } from "react-router-dom";
import styles from "../styles/pages/Dashboard.module.css";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className={styles.dashboardDiv}>
      <Sidebar styles={styles} />
      <div className={styles.tableDiv}>
        <div className={styles.cardHeaderDiv}>
          <div className={styles.contentDiv}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.textDiv}>Emails</div>
              <div className={styles.supportingTextDiv}>
                These are the email you sent using mailbes in the last 12
                months.
              </div>
            </div>
          </div>
        </div>
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
              <div className={styles.dropdownDiv}>
                <div className={styles.textDiv2}>Catalog</div>
                <div className={styles.supportingTextDiv1}>test@user.com</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dropdownDiv}>
                <div className={styles.textDiv2}>Circooles</div>
                <div className={styles.supportingTextDiv1}>test2@gmail.com</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dropdownDiv}>
                <div className={styles.textDiv2}>Command+R</div>
                <div className={styles.supportingTextDiv1}>test@cmdr.ai</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dropdownDiv}>
                <div className={styles.textDiv2}>Hourglass</div>
                <div className={styles.supportingTextDiv1}>
                  hi@hourglass.app
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dropdownDiv}>
                <div className={styles.textDiv2}>Layers</div>
                <div className={styles.supportingTextDiv1}>
                  meow@getlayers.io
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dropdownDiv}>
                <div className={styles.textDiv2}>Quotient</div>
                <div className={styles.supportingTextDiv1}>
                  question@quotient.co
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dropdownDiv}>
                <div className={styles.textDiv2}>Sisyphus</div>
                <div className={styles.supportingTextDiv1}>
                  contact@sisyphus.com
                </div>
              </div>
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
            <div className={styles.tableCellDiv8}>
              <div className={styles.badgeDiv}>
                <div className={styles.badgeBaseDiv1}>
                  <div className={styles.textDiv1}>Unseen</div>
                </div>
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
                <div className={styles.badgeBaseDiv}>
                  <div className={styles.textDiv1}>Seen</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv8}>
              <div className={styles.badgeDiv}>
                <div className={styles.badgeBaseDiv1}>
                  <div className={styles.textDiv1}>Unseen</div>
                </div>
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
                <div className={styles.badgeBaseDiv}>
                  <div className={styles.textDiv1}>Seen</div>
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
              <div className={styles.textAndSupportingText8}>
                <div className={styles.textDiv18}>Content curating app</div>
                <div className={styles.supportingTextDiv1}>
                  Brings all your news into one place
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textAndSupportingText8}>
                <div className={styles.textDiv18}>Design software</div>
                <div className={styles.supportingTextDiv1}>
                  Super lightweight design app
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textAndSupportingText8}>
                <div className={styles.textDiv18}>Data prediction</div>
                <div className={styles.supportingTextDiv1}>
                  AI and machine learning data
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textAndSupportingText8}>
                <div className={styles.textDiv18}>Productivity app</div>
                <div className={styles.supportingTextDiv1}>
                  Time management and productivity
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textAndSupportingText8}>
                <div className={styles.textDiv18}>Web app integrations</div>
                <div className={styles.supportingTextDiv1}>
                  Connect web apps seamlessly
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textAndSupportingText8}>
                <div className={styles.textDiv18}>Sales CRM</div>
                <div className={styles.supportingTextDiv1}>
                  Web-based sales doc management
                </div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textAndSupportingText8}>
                <div className={styles.textDiv18}>Automation and workflow</div>
                <div className={styles.supportingTextDiv1}>
                  Time tracking, invoicing and expenses
                </div>
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
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2022-09-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2022-07-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2021-09-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2020-09-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2019-09-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2022-12-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2018-09-11 5:30AM</div>
              </div>
            </div>
          </div>
          <div className={styles.columnDiv3}>
            <div className={styles.tableHeaderCell}>
              <div className={styles.tableHeaderDiv1}>
                <div className={styles.textDiv1}>Date seen</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2022-09-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>Null</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2021-09-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2020-09-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>Null</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2022-12-11 5:30AM</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.dateDiv}>
                <div className={styles.textDiv2}>2018-09-11 5:30AM</div>
              </div>
            </div>
          </div>
          <div className={styles.columnDiv5}>
            <div className={styles.tableHeaderCell5}>
              <div className={styles.tableHeaderDiv1}>
                <div className={styles.textDiv1}>Column</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
          </div>
          <div className={styles.columnDiv5}>
            <div className={styles.tableHeaderCell5}>
              <div className={styles.tableHeaderDiv1}>
                <div className={styles.textDiv1}>Column</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
          </div>
          <div className={styles.columnDiv5}>
            <div className={styles.tableHeaderCell5}>
              <div className={styles.tableHeaderDiv1}>
                <div className={styles.textDiv1}>Column</div>
              </div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
            <div className={styles.tableCellDiv}>
              <div className={styles.textDiv18}>Text</div>
            </div>
          </div>
          <div className={styles.dropdownDiv}>
            <div className={styles.tableHeaderCell8} />
            <button className={styles.tableCellButton}>
              <div className={styles.dropdownDiv}>
                <img
                  className={styles.moreVerticalIcon}
                  alt=""
                  src="../morevertical.svg"
                />
              </div>
            </button>
            <button className={styles.tableCellButton}>
              <div className={styles.dropdownDiv}>
                <img
                  className={styles.moreVerticalIcon}
                  alt=""
                  src="../morevertical.svg"
                />
              </div>
            </button>
            <button className={styles.tableCellButton}>
              <div className={styles.dropdownDiv}>
                <img
                  className={styles.moreVerticalIcon}
                  alt=""
                  src="../morevertical.svg"
                />
              </div>
            </button>
            <button className={styles.tableCellButton}>
              <div className={styles.dropdownDiv}>
                <img
                  className={styles.moreVerticalIcon}
                  alt=""
                  src="../morevertical.svg"
                />
              </div>
            </button>
            <button className={styles.tableCellButton}>
              <div className={styles.dropdownDiv}>
                <img
                  className={styles.moreVerticalIcon}
                  alt=""
                  src="../morevertical.svg"
                />
              </div>
            </button>
            <button className={styles.tableCellButton}>
              <div className={styles.dropdownDiv}>
                <img
                  className={styles.moreVerticalIcon}
                  alt=""
                  src="../morevertical.svg"
                />
              </div>
            </button>
            <button className={styles.tableCellButton}>
              <div className={styles.dropdownDiv}>
                <img
                  className={styles.moreVerticalIcon}
                  alt=""
                  src="../morevertical.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
