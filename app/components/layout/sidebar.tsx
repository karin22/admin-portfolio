import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SidebarItem from "@/app/components/layout/sidebarItem";

interface Props {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  container: (() => HTMLElement) | undefined;
  drawerWidth: number;
}

export default function LayoutSidebar(props: Props) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      {/* SideBar mobile */}

      <Drawer
        container={props.container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        <SidebarItem />
      </Drawer>

      {/* SideBar desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        <SidebarItem />
      </Drawer>
    </Box>
  );
}
