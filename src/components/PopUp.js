import { TextField, Button, Typography, Box, IconButton } from "@mui/material";
import styles from "../styles/components/Popup.module.css";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import toast from "react-hot-toast";

const PopUp = ({ setPopUp }) => {
  const time = new Date().getTime();
  const imgText = `https://mydomain.com/${time}`;

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
