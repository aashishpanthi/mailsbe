import styles from "../styles/pages/Profile.module.css";

import { useState } from "react";
import { Helmet } from "react-helmet";
import { useOutletContext } from "react-router-dom";
import Input from "../components/Input";

const Profile = () => {
  const { user } = useOutletContext();

  const [name, setname] = useState(user?.metadata?.name ?? "");

  const isNameDirty = name !== user?.metadata?.name;

  const updateUserProfile = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Profile - Mailsbe</title>
      </Helmet>

      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Profile</h2>
          <p>Update your personal information.</p>
        </div>

        <div className={styles.card}>
          <form onSubmit={updateUserProfile} className={styles.form}>
            <div className={styles["form-fields"]}>
              <div className={styles["input-group"]}>
                <Input
                  type="text"
                  label="Full name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </div>
              <div className={styles["input-email-wrapper"]}>
                <Input
                  type="email"
                  label="Email address"
                  value={user?.email}
                  readOnly
                />
              </div>
            </div>

            <div className={styles["form-footer"]}>
              <button
                type="submit"
                disabled={!isNameDirty}
                className={styles.button}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
