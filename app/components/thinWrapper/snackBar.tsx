"use client";

import { forwardRef, useCallback } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppSelector, useAppDispatch } from "@/app/store/hook";
import { handleOnClose } from "@/app/store/alert";
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ThinWrapperSnackBar() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.AlertStore.isOpen);
  const message = useAppSelector((state) => state.AlertStore.message);
  const severity = useAppSelector((state) => state.AlertStore.severity);

  const handleClose = useCallback(() => {
    dispatch(handleOnClose());
  }, [dispatch]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
