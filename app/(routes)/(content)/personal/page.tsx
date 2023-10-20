"use client";
import { useState, ChangeEvent, useMemo } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import style from "./page.personal.module.css";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

export default function PersonalPage() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");

  const urlFile = useMemo(() => {
    if (!selectedFile) return;
    return URL.createObjectURL(selectedFile);
  }, [selectedFile]);

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    if (!files.length) return;
    setSelectedFile(files[0]);
  };

  const handleSubmit = () => {
    console.log(firstName);
  };
  const disableBtnSave = useMemo(() => {
    return !firstName || !lastName || !position;
  }, [firstName, lastName, position]);
  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Stack direction="column">
          <label className={style.box}>
            <Avatar
              alt="profile"
              src={urlFile}
              sx={{ width: 100, height: 100, margin: "0 auto" }}
            />
            <DriveFileRenameOutlineIcon className={style.icon} />
            <input
              type="file"
              accept="image/png, image/jpeg"
              hidden
              onChange={handleFileInput}
            />
          </label>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
              display: "flex",
              flexDirection: "column",
            }}
            autoComplete="off"
          >
            <TextField
              value={firstName}
              variant="filled"
              required
              fullWidth
              id="firstName"
              label="First name"
              color="primary"
              focused
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              value={lastName}
              variant="filled"
              required
              fullWidth
              id="lastName"
              label="Last name"
              color="primary"
              focused
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              value={position}
              variant="filled"
              required
              fullWidth
              id="position"
              label="Position"
              color="primary"
              focused
              onChange={(e) => setPosition(e.target.value)}
            />
            <TextField
              value={bio}
              label="Bio"
              multiline
              rows={6}
              variant="filled"
              focused
              onChange={(e) => setBio(e.target.value)}
            />
          </Box>
          <Button
            disabled={disableBtnSave}
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "16px" }}
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
