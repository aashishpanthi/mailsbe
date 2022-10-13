import Sidebar from "../components/Sidebar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import styles from "../styles/pages/Dashboard.module.css";
import { useAuthenticationStatus, useUserData } from "@nhost/react";
import Spinner from "./Spinner";

function ProtectedDashboard() {
  const user = useUserData();
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return (
    <div className={styles.dashboardDiv}>
      <Sidebar styles={styles} user={user} />
      <Outlet context={{ user }} />
    </div>
  );
}

export default ProtectedDashboard;
