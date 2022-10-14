import Sidebar from "../components/Sidebar";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import styles from "../styles/pages/Dashboard.module.css";
import { useAuthenticationStatus, useUserData } from "@nhost/react";
import Spinner from "./Spinner";
import { useState } from "react";
import PopUp from "./PopUp";

function ProtectedDashboard() {
  const user = useUserData();
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const location = useLocation();

  const [popUp, setPopUp] = useState(false);

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
      <Sidebar styles={styles} user={user} setPopUp={setPopUp} />
      <Outlet context={{ user }} />
      {popUp && <PopUp setPopUp={setPopUp} />}
    </div>
  );
}

export default ProtectedDashboard;
