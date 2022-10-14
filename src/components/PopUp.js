import { TextField, Button, Typography, IconButton } from "@mui/material";
import styles from "../styles/components/Popup.module.css";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import toast from "react-hot-toast";

import { useState, useEffect } from "react";

const PopUp = ({ setPopUp }) => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [imgText, setImgText] = useState("");

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(imgText);
      toast.success("Copied to clipboard");
    } catch (err) {
      toast.error("Unable to copy to clipboard");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPopUp(false);
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
          <Button
            className={styles.buttonContainedText}
            variant="contained"
            color="primary"
            endIcon={<SaveIcon />}
            size="large"
            fullWidth
            type="submit"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
