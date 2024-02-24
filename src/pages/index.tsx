import {
  Stack,
  Image,
  Button,
  VisuallyHidden,
  // Box,
  Tooltip,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";

import ModalCheck from "@/components/ModalCheck";

const LandingPage = () => {
  const openDate = new Date("2024-02-26T00:00:00+07:00");
  const closeDate = new Date("2024-02-28T17:00:00+07:00");

  const now = new Date();
  const isRegisOpen = now < closeDate && now >= openDate;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      {/* lampu */}
      <Image
        as={motion.img}
        display={"flex"}
        src="/assets/lampu.png"
        pos={"absolute"}
        top={0}
        minW={"72rem"}
        fit={"fill"}
        objectPosition={"center"}
        variants={{
          initial: {
            // rotate: [0, 360],
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            transition: {
              duration: 0.75,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "backOut",
            },
          },
        }}
        animate={["initial"]}
      />

      <Image
        src="/assets/paper.png"
        alt="welcome to maxima 2024"
        w={"36rem"}
        mb={["8rem", "8rem", "0", "0", "0"]}
      />
      <VisuallyHidden>Welcome to Maxima 2024</VisuallyHidden>

      {/* button */}
      <Stack
        direction={"row"}
        pos={"absolute"}
        bottom={["34%", "26%", "18%", "18%", "18%"]}
      >
        <Tooltip
          label={
            now < openDate
              ? "Get ready for OPREC batch 2!"
              : "OPREC batch 2 has been closed!"
          }
          isDisabled={isRegisOpen}
          aria-label={
            now < openDate
              ? "Get ready for OPREC batch 2!"
              : "OPREC batch 2 has been closed!"
          }
          rounded={"full"}
          bgColor={"#b00034"}
          hasArrow
          placement="top"
        >
          <Button
            as={isRegisOpen ? RouterLink : undefined}
            to={isRegisOpen ? "/daftar" : undefined}
            isDisabled={!isRegisOpen}
            bgColor={"#b00034"}
            borderRadius={"full"}
            p={"1.5rem"}
            px={"1.5rem"}
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
            zIndex={6}
          >
            REGISTER
          </Button>
        </Tooltip>

        <Button
          bgColor={"#b00034"}
          borderRadius={"full"}
          p={"1.5rem"}
          px={"1.5rem"}
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
          zIndex={6}
          onClick={handleCheckButtonClick}
        >
          CHECK
        </Button>
        <ModalCheck isOpen={isModalOpen} onClose={handleCloseModal} />
        {/* <ModalCheck /> */}
      </Stack>

      {/* hands */}

      <Image
        as={motion.img}
        src="/assets/rightHand.png"
        pos={"absolute"}
        w={["20rem", "20rem", "19rem", "23rem", "24rem", "32rem"]}
        bottom={-12}
        right={[-40, -20, -20, -40, -14, -14]}
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
        w={["16rem", "18rem", "18rem", "22rem", "28rem"]}
        // w={["16rem", "18rem"]}
        bottom={-12}
        left={-20}
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
