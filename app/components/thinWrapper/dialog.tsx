import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface Props {
  open: boolean;
  children?: React.ReactNode;
  title?: string;
  btnOK?: {
    color:
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning";
    text: string;
  };
  onSubmit: () => void;
  onClose: () => void;
}

export default function ThinWrapperDialog(props: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { btnOK = { color: "success", text: "OK" } } = props;

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.title && (
          <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        )}
        {props.children && (
          <DialogContent style={{ minWidth: "300px" }}>
            {props.children}
          </DialogContent>
        )}

        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button
            onClick={props.onSubmit}
            color={btnOK.color}
            variant="outlined"
            autoFocus
          >
            {btnOK.text}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
