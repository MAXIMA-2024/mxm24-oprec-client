import { Stack, Image, Button, VisuallyHidden, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { motion } from "framer-motion";

const LandingPage = () => {
  const openDate = new Date("2024-02-07T00:00:00Z");

  return (
    <Stack
      minH={"100vh"}
      minW={"100vw"}
      bgImage={"/assets/bg/landingPageBG.png"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      justifyContent={"center"}
      alignItems={"center"}
      pos={"relative"}
      overflow={"hidden"}
    >
      <Image
        src="/assets/paper.png"
        alt="welcome to maxima 2024"
        w={"36rem"}
        mb={["8rem", "8rem", "0", "0", "0"]}
      />
      <VisuallyHidden>Welcome to Maxima 2024</VisuallyHidden>

      {/* button */}
      {new Date() >= openDate ? (
        <Stack
          direction={"row"}
          pos={"absolute"}
          bottom={["34%", "26%", "18%", "18%", "18%"]}
        >
          <Button
            as={RouterLink}
            to={"/daftar"}
            bgColor={"#b00034"}
            borderRadius={"full"}
            p={"2rem"}
            px={"2rem"}
            // mb={["8rem", "8rem", "0", "0", "0"]}
            cursor={"pointer"}
            shadow={"lg"}
            transition="background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              bgColor: "#a70000",
              transform: "translateY(-5px)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
            fontSize={["xl", "3xl", "3xl", "3xl", "3xl"]}
            color={"white"}
            fontFamily={"Minal"}
            letterSpacing={"1px"}
          >
            REGISTER
          </Button>

          <Button
            bgColor={"#b00034"}
            borderRadius={"full"}
            p={"2rem"}
            px={"2rem"}
            // mb={["8rem", "8rem", "0", "0", "0"]}
            cursor={"pointer"}
            shadow={"lg"}
            transition="background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              bgColor: "#a70000",
              transform: "translateY(-5px)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
            fontSize={["xl", "3xl", "3xl", "3xl", "3xl"]}
            color={"white"}
            fontFamily={"Minal"}
            letterSpacing={"1px"}
          >
            CHECK
          </Button>
        </Stack>
      ) : (
        <Box
          bgColor={"#b00034"}
          borderRadius={"full"}
          p={"1rem"}
          px={"2rem"}
          pos={"absolute"}
          bottom={["34%", "26%", "18%", "18%", "18%"]}
          // mb={["8rem", "8rem", "0", "0", "0"]}
          shadow={"lg"}
          transition="background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
          _hover={{
            bgColor: "#a70000",
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          }}
          fontSize={["xl", "3xl", "3xl", "3xl", "3xl"]}
          color={"white"}
          fontFamily={"Minal"}
          letterSpacing={"1px"}
        >
          ARE YOU READY?
        </Box>
      )}

      {/* hands */}

      <Image
        as={motion.img}
        src="/assets/rightHand.png"
        pos={"absolute"}
        w={["16rem", "16rem", "22rem", "24rem", "32rem"]}
        bottom={-8}
        right={[-20, -8, -8, -8, -8, -8]}
        variants={{
          initial: {
            y: [-13, 11],
            x: [14, -15],
            rotateZ: [0, 2],
            rotate: 0,
            transition: {
              // delay: 0.5,
              duration: 7,
              repeat: Infinity,
              // repeatDelay: 0.2,
              repeatType: "reverse",
              easings: ["circInOut"],
            },
          },
        }}
        animate={["initial"]}
        zIndex={5}
      />

      <Image
        as={motion.img}
        src="/assets/leftHand.png"
        pos={"absolute"}
        // w={["14rem", "16rem", "24rem", "24rem", "32rem"]}
        w={["14rem", "12rem", "20rem", "22rem", "28rem"]}
        bottom={-8}
        left={-8}
        variants={{
          initial: {
            y: [-8, 10],
            x: [-12, 10],
            rotateZ: [0, 3],
            rotate: 0,
            transition: {
              // delay: 1.25,
              duration: 6,
              repeat: Infinity,
              // repeatDelay: 0.2,
              repeatType: "mirror",
              easings: ["easeIn"],
            },
          },
        }}
        animate={["initial"]}
        zIndex={5}
      />
    </Stack>
  );
};

export default LandingPage;
