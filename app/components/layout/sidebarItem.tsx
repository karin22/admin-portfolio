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
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export default function LayoutSidebarItem() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menus = [
    { name: "Personal", link: "personal", icon: <AccountCircleIcon /> },
    { name: "Experience", link: "experience", icon: <CurrencyExchangeIcon /> },
    { name: "Education", link: "education", icon: <SchoolIcon /> },
    { name: "Skill", link: "skill", icon: <HtmlIcon /> },
    { name: "Contact", link: "contact", icon: <RecentActorsIcon /> },
  ];

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const linkToPage = useCallback(
    (link: string) => {
      router.push(link);
    },
    [router]
  );

  const onSubmit = useCallback(() => {
    router.replace("/login");
    onClose();
  }, [onClose, router]);

  return (
    <>
      <Toolbar />
      <List sx={{ flexGrow: 1 }}>
        {menus.map((menu) => (
          <ListItem
            key={menu.name}
            disablePadding
            onClick={() => linkToPage(menu.link)}
          >
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
