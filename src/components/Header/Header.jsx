import { Link } from "react-router-dom";
import { Stack, Typography, Avatar, Button, Box, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Header = ({ toggleDrawer }) => {
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
  const avatar = me && `${me.first_name} ${me.last_name}`;

  console.log(me);

  return (
    <Stack flexDirection={"row"} alignItems={"center"} justifyContent="space-between" paddingBlock={4}>
      <Typography as={Link} variant="h4" fontWeight={600} letterSpacing={4} to="/" color={"blue"} sx={{ textDecoration: "none" }}>
        LOGO
      </Typography>
      <Box display={"flex"} gap={2} alignItems={"center"}>
        <IconButton onClick={toggleDrawer(true)} aria-label="delete" size="large" color="secondary">
          <AddShoppingCartIcon />
        </IconButton>
        {me ? <Avatar {...stringAvatar(avatar)} /> : ""}
        <Button variant="contained" as={Link} sx={{ textDecoration: "none", textAlign: "center" }} fontWeight="500" to="/login">
          SIGN IN
        </Button>
      </Box>
    </Stack>
  );
};
