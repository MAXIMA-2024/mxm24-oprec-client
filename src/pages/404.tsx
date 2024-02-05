import { Link } from "@/router";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <>
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
      ></Stack>

      <Modal isOpen isCentered onClose={() => {}}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"}>
          <ModalHeader>404 Not Found</ModalHeader>
          <ModalBody>
            <Text>Tidak dapat menemukan page yang kamu cari :(</Text>
          </ModalBody>

          <ModalFooter>
            <Link to={"/"}>
              <Button colorScheme="red">Kembali</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotFoundPage;
