import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function HomePage() {
  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
    </>
  );
}
