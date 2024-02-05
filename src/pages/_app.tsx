import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Stack minH={"100vh"} minW={"100vw"}>
      <Outlet />
    </Stack>
  );
};

export default AppLayout;
