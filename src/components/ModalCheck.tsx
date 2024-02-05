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
import ResultModal from "@/components/ResultModal";

import useApi, { ResponseModel, useToastErrorHandler } from "@/hooks/useApi";

interface ModalCheckProps {
  isOpen: boolean;
  onClose: () => void;
}

type InterviewStatus = {
  nim: string;
  nama: string;
  divisi: string;
  divisiAlt: string;
  ruangan: string;
  tanggal: string;
  status: "Registered" | "Interview" | "Accepted" | "Rejected";
  divisiFinal: string;
};

const ModalCheck = ({ isOpen, onClose }: ModalCheckProps) => {
  const api = useApi();
  const errorHandler = useToastErrorHandler();

  const [resultModalOpen, setResultModalOpen] = useState<boolean>(false);
  const [interviewStatus, setInterviewStatus] =
    useState<InterviewStatus | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [nim, setNim] = useState<string>("");
  const isNimLengthValid = nim.trim().length === 11;

  const handleNimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericInput = event.target.value.replace(/[^0-9]/g, "");
    setNim(numericInput);
  };

  const handleCheckButtonClick = () => {
    setIsLoading(true);
    api
      .get<ResponseModel<InterviewStatus>>(`/data/${nim}`)
      .then(({ data }) => {
        setInterviewStatus(data.data);
        setResultModalOpen(true);
      })
      .catch(errorHandler)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleResultModalClose = () => {
    setResultModalOpen(false);
    setInterviewStatus(null);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"} m={"1rem"}>
          <ModalHeader>Check your registration status!</ModalHeader>
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
              // colorScheme="teal"
              bgColor={"#F59D00"}
              color={"white"}
              _hover={{
                bgColor: "#E79200",
              }}
              onClick={handleCheckButtonClick}
              isDisabled={!isNimLengthValid}
              isLoading={isLoading}
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
