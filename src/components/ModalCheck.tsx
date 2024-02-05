import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import ResultModal from "./ResultModal";

interface ModalCheckProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCheck: React.FC<ModalCheckProps> = ({ isOpen, onClose }) => {
  const [resultModalOpen, setResultModalOpen] = useState<boolean>(false);
  const [interviewStatus, setInterviewStatus] = useState<
    "pass" | "fail" | "registered"
  >("registered");

  const [nim, setNim] = useState<string>("");
  const isNimLengthValid = nim.trim().length >= 11;

  const handleNimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericInput = event.target.value.replace(/[^0-9]/g, "");
    setNim(numericInput);
  };

  const handleCheckButtonClick = () => {
    // onClose();
    setResultModalOpen(true);
  };

  const handleResultModalClose = () => {
    setResultModalOpen(false);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"}>
          <ModalHeader>Interview Test Status</ModalHeader>
          <ModalBody>
            <Text mb={"10px"}>Enter your NIM in the input box:</Text>
            <Input
              type="text"
              placeholder="00000012345"
              value={nim}
              onChange={handleNimChange}
              isRequired
              pattern="[0-9]*"
              border={"2px solid #00000095"}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="teal"
              onClick={handleCheckButtonClick}
              isDisabled={!isNimLengthValid}
            >
              Check
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ResultModal
        isOpen={resultModalOpen}
        onClose={handleResultModalClose}
        interviewStatus={interviewStatus}
      />
    </>
  );
};

export default ModalCheck;
