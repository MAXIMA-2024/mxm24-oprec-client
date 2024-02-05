import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Text,
} from "@chakra-ui/react";

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  interviewStatus: "pass" | "fail" | "registered";
}

const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  onClose,
  interviewStatus,
}) => {
  let message = "";

  switch (interviewStatus) {
    case "pass":
      message = "Congratulations! You have passed the interview stage.";
      break;
    case "fail":
      message = "Sorry! You have not passed the interview stage.";
      break;
    case "registered":
      message =
        "Please wait. The analysis process is still ongoing. We appreciate your patience.";
      break;
    default:
      message = "Invalid interview status.";
      break;
  }

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor={"#e9e9c0"}>
        <ModalHeader>Interview Status</ModalHeader>
        <ModalBody>
          <Text mb={"10px"}>{message}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResultModal;
