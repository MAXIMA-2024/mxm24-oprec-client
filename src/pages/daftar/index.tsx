import { useNavigate } from "@/router";
import { Box, Stack, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const DaftarForm = () => {
  const openDate = new Date("2024-02-26T00:00:00+07:00");
  const closeDate = new Date("2024-02-28T17:00:00+07:00");

  const now = new Date();
  const isRegisOpen = now < closeDate && now >= openDate;

  const nav = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (now < openDate) {
      toast({
        title: "Registrasi belum dibuka",
        description:
          "Registrasi OPREC 2 akan dibuka pada tanggal 26 Februari 2024",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      nav("/");
    }

    if (now >= closeDate) {
      toast({
        title: "Registrasi telah ditutup",
        description:
          "Registrasi OPREC 2 telah ditutup, terima kasih atas partisipasinya!",
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
      {isRegisOpen && (
        <Box
          as="iframe"
          src={
            "https://docs.google.com/forms/d/e/1FAIpQLSehD_aEz1duFRqELPaNlYVat5nvkVvJChrBC3BKYwABmL28Tg/viewform?embedded=true"
          }
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
