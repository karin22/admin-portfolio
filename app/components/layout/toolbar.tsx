import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

interface Props {
  handleDrawerToggle: () => void;
}
export default function LayoutToolbar(props: Props) {
  const pathname = usePathname();

  return (
    <Toolbar>
      <IconButton
        color="secondary"
        aria-label="open drawer"
        edge="start"
        onClick={props.handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" color="secondary">
        #{pathname.replace("/", "").toUpperCase()}
      </Typography>
    </Toolbar>
  );
}
