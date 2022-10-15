import styles from "../styles/pages/Profile.module.css";

import { useState } from "react";
import { Helmet } from "react-helmet";
import { useOutletContext } from "react-router-dom";
import Input from "../components/Input";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";

const UPDATE_USER_MUTATION = gql`
  mutation ($id: uuid!, $displayName: String!, $metadata: jsonb) {
    updateUser(
      pk_columns: { id: $id }
      _set: { displayName: $displayName, metadata: $metadata }
    ) {
      id
      displayName
      metadata
    }
  }
`;

const Profile = () => {
  const { user } = useOutletContext();
  const [mutateUser, { loading: updatingProfile }] =
    useMutation(UPDATE_USER_MUTATION);

  const [name, setname] = useState(user?.metadata?.name ?? "");
  console.log(name);

  const isNameDirty = name !== user?.metadata?.name;

  const updateUserProfile = async (e) => {
    e.preventDefault();

    try {
      await mutateUser({
        variables: {
          id: user.id,
          displayName: name.trim(),
          metadata: {
            name,
          },
        },
      });
      toast.success("Updated successfully", { id: "updateProfile" });

      window.location.reload();
    } catch (error) {
      toast.error("Unable to update profile", { id: "updateProfile" });
    }
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
                  disabled={updatingProfile}
                  required
                />
              </div>
              <div className={styles["input-email-wrapper"]}>
                <Input
                  type="email"
                  label="Email address"
                  value={user?.email}
                  disabled={updatingProfile}
                  readOnly
                />
              </div>
            </div>

            <div className={styles["form-footer"]}>
              <button
                type="submit"
                disabled={!isNameDirty || updatingProfile}
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
