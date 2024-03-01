import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

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
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
            paddingBlock: "8px",
          }}
          end
          to="/admin"
        >
          Category
        </Typography>
        <Typography
          letterSpacing={4}
          marginBlock={2}
          display={"block"}
          component={NavLink}
          sx={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
            paddingBlock: "8px",
          }}
          to="products"
        >
          Products
        </Typography>
        <Typography
          letterSpacing={4}
          marginBlock={2}
          display={"block"}
          component={NavLink}
          sx={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
            paddingBlock: "8px",
          }}
          to="orders"
        >
          Orders
        </Typography>
      </Box>
      <Box height={"100%"}>
        <Box>
          <Typography variant="h3" textAlign={"center"} fontWeight={700} letterSpacing={20} paddingBlock={2} color={"WindowText"}>
            ADMIN
          </Typography>
        </Box>
        <Box padding={4} height={"100%"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
