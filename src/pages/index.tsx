import { Stack, Text, Box } from "@chakra-ui/react";
import landingPageImg from "/assets/landingPage.png";
import "@/fonts.css";

const LandingPage = () => {
  return (
    <Stack
      minH={"100vh"}
      minW={"100vw"}
      bgImage={landingPageImg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      justifyContent={"center"}
      alignItems={"center"}
      pos={"relative"}
    >
      <Box
        bgColor={"#b00034"}
        borderRadius={"50px"}
        p={"10px"}
        px={"75px"}
        pos={"absolute"}
        bottom={"5%"}
        cursor={"pointer"}
        shadow={"lg"}
        transition="background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
        _hover={{
          bgColor: "#a70000",
          transform: "translateY(-5px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Text
          fontSize={"3xl"}
          color={"white"}
          fontFamily={"Minal"}
          textTransform={"uppercase"}
          letterSpacing={"1px"}
        >
          register
        </Text>
      </Box>
    </Stack>
  );
};

export default LandingPage;
