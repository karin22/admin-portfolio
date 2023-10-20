import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContactsIcon from "@mui/icons-material/Contacts";
export default function PContactPage() {
  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Stack direction="column">
          <ContactsIcon
            style={{
              width: "100px",
              height: "100px",
              margin: "0 auto 16 auto",
            }}
          />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              variant="filled"
              required
              fullWidth
              id="tel"
              label="Tel"
              color="primary"
              focused
            />

            <TextField
              variant="filled"
              required
              fullWidth
              id="email"
              label="Email"
              color="primary"
              focused
            />
            <TextField
              variant="filled"
              required
              fullWidth
              id="facebook"
              label="Facebook"
              color="primary"
              focused
            />
            <TextField
              variant="filled"
              required
              fullWidth
              id="line"
              label="Line"
              color="primary"
              focused
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
