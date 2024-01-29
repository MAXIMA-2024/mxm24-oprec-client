import { Stack, Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type WindowProps = {
  children: ReactNode;
};

const Window = ({ children }: WindowProps) => {
  return (
    <Stack
      direction={"column"}
      h={"16rem"}
      w={"32rem"}
      bgColor={"gray"}
      rounded={"xl"}
      p={"1rem"}
    >
      <Stack direction={"row"} id="button-wrapper">
        <Box boxSize={"1rem"} bgColor={"red"} rounded={"full"}></Box>
        <Box boxSize={"1rem"} bgColor={"yellow"} rounded={"full"}></Box>
        <Box boxSize={"1rem"} bgColor={"green"} rounded={"full"}></Box>
      </Stack>

      <Stack
        flex={1}
        align={"center"}
        justify={"center"}
        fontSize={"xl"}
        textColor={"white"}
      >
        <Text>{children}</Text>
      </Stack>
    </Stack>
  );
};

export default Window;
