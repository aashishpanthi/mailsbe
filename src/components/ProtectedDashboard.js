import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "../styles/pages/Dashboard.module.css";

function ProtectedDashboard() {
  const user = null;
  return (
    <div className={styles.dashboardDiv}>
      <Sidebar styles={styles} />
      <Outlet context={{ user }} />
    </div>
  );
}

export default ProtectedDashboard;
