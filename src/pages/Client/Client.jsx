import { Container, Drawer, Stack } from "@mui/material";
import { useState } from "react";
import { Header } from "../../components";
import { ClientCard } from "../../components";

export const Client = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Container>
      <Header toggleDrawer={toggleDrawer} />

      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <p style={{ width: "250px" }}>Hello world</p>
      </Drawer>

      <Stack flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"} gap={3} marginBlock={8}>
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </Stack>
    </Container>
  );
};
