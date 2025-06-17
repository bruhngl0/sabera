import { AppBar, Box } from "@mui/material";

import blackLogo from "../assets/images/black_text.png";

const Navbar = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
      }}
    >
      <Box
        component="img"
        src={blackLogo}
        sx={{
          width: "150px",
          height: "auto",
        }}
      />
    </AppBar>
  );
};

export default Navbar;
