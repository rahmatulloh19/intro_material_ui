import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

export const Admin = () => {
  return (
    <Box display={"grid"} color={"white"} height={"100%"} sx={{ gridTemplateColumns: "25% 1fr" }}>
      <Box bgcolor={"blue"} height={"100%"} position={"sticky"}>
        <Typography variant="h4" textAlign={"center"} fontWeight={700} letterSpacing={4} marginBlock={2}>
          LOGO
        </Typography>
        <Typography
          letterSpacing={4}
          marginBlock={2}
          display={"block"}
          component={NavLink}
          sx={{
            display: "flex",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
            padding: "12px",
            gap: "12px",
          }}
          end
          to="/admin"
        >
          <CategoryIcon />
          Category
        </Typography>
        <Typography
          letterSpacing={4}
          marginBlock={2}
          display={"block"}
          component={NavLink}
          sx={{
            display: "flex",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
            padding: "12px",
            gap: "12px",
          }}
          to="products"
        >
          <AutoAwesomeMotionIcon />
          Products
        </Typography>
        <Typography
          letterSpacing={4}
          marginBlock={2}
          display={"block"}
          component={NavLink}
          sx={{
            display: "flex",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
            padding: "12px",
            gap: "12px",
          }}
          to="orders"
        >
          <PostAddIcon />
          Orders
        </Typography>
      </Box>
      <Box height={"100%"}>
        <Box>
          <Typography variant="h3" textAlign={"center"} fontWeight={700} letterSpacing={20} paddingBlock={2} color={"WindowText"}>
            ADMIN
          </Typography>
        </Box>
        <Box padding={4}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
