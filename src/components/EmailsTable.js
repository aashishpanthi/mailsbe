import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useUserData } from "@nhost/react";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const GET_EMAILS = gql`
  query getEmails($user: String) {
    emails(order_by: { created_at: desc }, where: { user: { _eq: $user } }) {
      created_at
      description
      email
      id
      img_text
      seen
      seen_at
    }
  }
`;

const DELETE_EMAIL = gql`
  mutation deleteEmail($id: Int) {
    delete_emails(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const EmailsTable = ({ styles }) => {
  const user = useUserData();
  const [emails, setEmails] = useState([]);

  const [getEmails, { loading, error, data }] = useLazyQuery(GET_EMAILS, {
    variables: { user: user.id },
  });

  const [deleteTodo, { loading: deleting, error: deleteError }] =
    useMutation(DELETE_EMAIL);

  const fetchEmails = async () => {
    try {
      await getEmails({
        variables: { user: user.id },
      });

      // toast.success("Emails fetched successfully");
      setEmails(data.emails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, [data, user]);

  const deleteEmail = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (!confirmation) {
      return;
    }

    try {
      await deleteTodo({
        variables: {
          id: id,
        },
      });

      toast.success("Email deleted successfully");
      window.location.reload();
    } catch (err) {
      toast.error("Unable to delete email");
    }
  };

  if (loading) {
    return (
      <div className={styles.loader}>
        <CircularProgress />
      </div>
    );
  }

  if (emails.length === 0) {
    return <div className={styles.loader}>No emails found</div>;
  }

  return (
    <div className={styles.contentDiv1}>
      <div className={styles.columnDiv}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv}>
            <div className={styles.textDiv1}>Email</div>
          </div>
        </div>
        {emails.map((email) => (
          <div className={styles.tableCellDiv} key={email.id}>
            <div className={styles.supportingTextDiv1}>{email.email}</div>
          </div>
        ))}
      </div>
      <div className={styles.columnDiv1}>
        <div className={styles.tableHeaderCell1}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>Status</div>
          </div>
        </div>
        {emails.map(({ seen, id }) => (
          <div className={styles.tableCellDiv} key={id}>
            <div className={styles.badgeDiv}>
              <div className={styles.badgeBaseDiv}>
                <div className={seen ? styles.textDiv : styles.textDiv1}>
                  {seen ? `Seen` : `Unseen`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.columnDiv2}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>Description</div>
          </div>
        </div>
        {emails.map(({ description, id }) => (
          <div className={styles.tableCellDiv} key={id}>
            <div className={styles.supportingTextDiv1}>{description}</div>
          </div>
        ))}
      </div>
      <div className={styles.columnDiv3}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>Date sent</div>
          </div>
        </div>

        {emails.map(({ created_at, id }) => (
          <div className={styles.tableCellDiv} key={id}>
            <div className={styles.dateDiv}>
              {new Date(created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.columnDiv3}>
        <div className={styles.tableHeaderCell}>
          <div className={styles.tableHeaderDiv1}>
            <div className={styles.textDiv1}>Date seen</div>
          </div>
        </div>
        {emails.map(({ seen_at, id, seen }) => (
          <div className={styles.tableCellDiv} key={id}>
            <div className={styles.dateDiv}>
              {seen ? new Date(seen_at).toLocaleString() : "Not seen"}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dropdownDiv}>
        <div className={styles.tableHeaderCell8} />
        {emails.map(({ id }) => (
          <div className={styles.tableCellButton} key={id}>
            <IconButton onClick={() => deleteEmail(id)}>
              <Delete />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailsTable;
