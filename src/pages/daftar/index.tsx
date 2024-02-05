import { useNavigate } from "@/router";
import { Box, Stack, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const DaftarForm = () => {
  const openDate = new Date("2024-02-07T00:00:00Z");
  const nav = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (new Date() < openDate) {
      toast({
        title: "Registrasi belum dibuka",
        description: "Registrasi akan dibuka pada tanggal 7 Februari 2024",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      nav("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      minH={"100vh"}
      minW={"100vw"}
      bgImage={"/assets/bg/formPageBG.png"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      justifyContent={"center"}
      alignItems={"center"}
      pos={"relative"}
    >
      {new Date() >= openDate && (
        <Box
          as="iframe"
          src={`https://docs.google.com/forms/d/e/1FAIpQLSerZfyUIfp5PKnHA6Qqvz7w05duNdQKL90JU7qmjOTAb_hIRg/viewform?embedded=true`}
          w="100%"
          h="100%"
          minH={"100vh"}
          minW={"100vw"}
          py={"1rem"}
        >
          Loading…
        </Box>
      )}
    </Stack>
  );
};

export default DaftarForm;
