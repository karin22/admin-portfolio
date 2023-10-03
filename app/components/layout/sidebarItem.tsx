import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SchoolIcon from "@mui/icons-material/School";
import HtmlIcon from "@mui/icons-material/Html";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ThinWrapperDialog from "@/app/components/thinWrapper/dialog";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function LayoutSidebarItem() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menus = [
    { name: "Personal", icon: <AccountCircleIcon /> },
    { name: "Experience", icon: <CurrencyExchangeIcon /> },
    { name: "Education", icon: <SchoolIcon /> },
    { name: "Skill", icon: <HtmlIcon /> },
    { name: "Contact", icon: <RecentActorsIcon /> },
  ];

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(() => {
    router.replace("/login");
    onClose();
  }, [onClose, router]);

  return (
    <>
      <Toolbar />
      <List sx={{ flexGrow: 1 }}>
        {menus.map((menu) => (
          <ListItem key={menu.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText secondary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <ListItem disablePadding onClick={() => setOpen(true)}>
        <ListItemButton>
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText secondary={"Logout"} />
        </ListItemButton>
      </ListItem>

      {/* Dialog Logout */}
      <ThinWrapperDialog
        open={open}
        btnOK={{ color: "error", text: "LOGOUT" }}
        onSubmit={onSubmit}
        onClose={onClose}
      >
        <Typography paragraph color="secondary" align="center">
          Are you sure?
        </Typography>
      </ThinWrapperDialog>
    </>
  );
}
