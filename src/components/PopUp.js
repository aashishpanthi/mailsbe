import {
  TextField,
  Typography,
  IconButton,
  FormHelperText,
  FormControl,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import toast from "react-hot-toast";
import { useUserData } from "@nhost/react";

import styles from "../styles/components/Popup.module.css";
import { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_EMAIL = gql`
  mutation addEmail(
    $email: String
    $description: String
    $img_text: String
    $user: String
  ) {
    insert_emails(
      objects: {
        description: $description
        email: $email
        img_text: $img_text
        user: $user
      }
    ) {
      affected_rows
    }
  }
`;

const PopUp = ({ setPopUp }) => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [imgText, setImgText] = useState("");

  const [addEmail, { data, loading, error }] = useMutation(ADD_EMAIL);

  //get the user id
  const user = useUserData();

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(imgText);
      toast.success("Copied to clipboard");
    } catch (err) {
      toast.error("Unable to copy to clipboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEmail({
        variables: {
          email: email,
          description: description,
          img_text: imgText,
          user: user.id,
        },
      });
      toast.success("Email added successfully");
      setPopUp(false);
      window.location.reload();
    } catch (err) {
      toast.error("Unable to add email");
    }
  };

  useEffect(() => {
    const time = new Date().getTime();
    setImgText(`https://mydomain.com/${time}`);
  }, []);

  return (
    <div className={styles.popup}>
      <div className={styles.popUpDiv}>
        <div className={styles.header}>
          <Typography variant="h6" component="h4">
            Enter new email details
          </Typography>

          <IconButton aria-label="close" onClick={() => setPopUp(false)}>
            <HighlightOffIcon />
          </IconButton>
        </div>
        <form className={styles.groupForm} onSubmit={handleSubmit}>
          <FormControl sx={{ m: 0, width: "100%" }} error={error}>
            <TextField
              className={styles.inputOutlinedTextField}
              fullWidth
              color="primary"
              variant="outlined"
              type="email"
              label="Email"
              placeholder="Receiver's email"
              size="medium"
              margin="none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className={styles.textAreaOutlinedTextField}
              color="primary"
              variant="outlined"
              multiline
              label="Description"
              placeholder="Some distinct description"
              helperText="This text will help to seperate emails."
              required
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className={styles.copyBox}>
              <TextField
                className={styles.inputFilledTextField}
                color="primary"
                variant="filled"
                type="text"
                label={imgText}
                size="medium"
                margin="none"
                disabled
                helperText="Copy this text and paste it in the email."
              />
              <IconButton
                aria-label="copy"
                className={styles.copyIcon}
                onClick={copyToClipboard}
              >
                <ContentCopyIcon />
              </IconButton>
            </div>

            {error && (
              <FormHelperText>{`Error occured! ${error.message}`}</FormHelperText>
            )}

            <LoadingButton
              className={styles.buttonContainedText}
              variant="contained"
              color="primary"
              endIcon={<SaveIcon />}
              size="large"
              fullWidth
              type="submit"
              loading={loading}
            >
              Save
            </LoadingButton>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
