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
import toast from "react-hot-toast";
import { useUserData } from "@nhost/react";

import styles from "../styles/components/Popup.module.css";
import { useState, useEffect, useRef } from "react";
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
  //get the user data
  const user = useUserData();

  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState(user.displayName);
  const [imgText, setImgText] = useState("");

  const [addEmail, { data, loading, error }] = useMutation(ADD_EMAIL);

  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEmail({
        variables: {
          email: email,
          description: description,
          img_text: imgText.split("=")[1],
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
    setImgText(
      `https://tkjfsvqlulofoefmacvj.nhost.run/v1/functions/update?text=${time}`
    );
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

            <TextField
              color="primary"
              variant="outlined"
              label="Your Name"
              placeholder="Enter your full name"
              helperText="An image will be attached with this text."
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className={styles.copyBox}>
              <div className={styles.imgDiv} ref={ref}>
                {name && name.substring(0, 1)}
                <img
                  src={imgText}
                  className={styles.pixelImg}
                  width={1}
                  height={1}
                />
                {name && name.substring(1, name.length)}
              </div>
              <span className={styles.imgHelperText}>
                Copy this text and paste it in the email.{" "}
                <strong>Imp: Don't erase it after pasting.</strong>
              </span>
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
