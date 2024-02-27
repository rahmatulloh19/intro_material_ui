import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Admin = () => {
  return (
    <Box display={"grid"} color={"white"} height={"100%"} sx={{ gridTemplateColumns: "25% 1fr" }}>
      <Box bgcolor={"blue"}>
        <Typography variant="h4" textAlign={"center"} fontWeight={700} letterSpacing={4} marginBlock={2}>
          LOGO
        </Typography>
        <Typography
          letterSpacing={4}
          marginBlock={2}
          display={"block"}
          component={NavLink}
          activeClassName="activcha"
          sx={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
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
          as={NavLink}
          sx={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
          }}
          to="products"
        >
          Products
        </Typography>
        <Typography
          letterSpacing={4}
          marginBlock={2}
          display={"block"}
          as={NavLink}
          sx={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            bgcolor: "blue",
          }}
          to="orders"
        >
          Orders
        </Typography>
      </Box>
      <Box>
        <Box bgcolor={"blue"}>
          <Typography variant="h5" textAlign={"center"} fontWeight={700} letterSpacing={4} paddingBlock={2}>
            ADMIN
            <Outlet />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
