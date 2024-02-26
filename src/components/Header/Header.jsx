import { Link, useNavigate } from "react-router-dom";
import { Container, Stack, Typography, Avatar, Button, Box, IconButton, Drawer } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

export const Client = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/login");
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  const me = JSON.parse(localStorage.getItem("me"));
  const avatar = `${me.first_name}${me.last_name}`;

  return (
    <Container>
      <Stack flexDirection={"row"} alignItems={"center"} justifyContent="space-between" paddingBlock={4}>
        <Typography as={Link} variant="h4" fontWeight={600} letterSpacing={4} to="/" sx={{ textDecoration: "none" }}>
          LOGO
        </Typography>
        <Box display={"flex"} gap={2}>
          <IconButton onClick={toggleDrawer(true)} aria-label="delete" size="large" color="secondary">
            <AddShoppingCartIcon />
          </IconButton>
          <Avatar {...stringAvatar(avatar)} />
          <Button color="warning" variant="contained" type="button" onClick={handleLogOut}>
            Log Out
          </Button>
        </Box>
      </Stack>

      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <p style={{ width: "250px" }}>Hello world</p>
      </Drawer>
    </Container>
  );
};
