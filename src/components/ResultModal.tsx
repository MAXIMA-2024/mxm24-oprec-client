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

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  interviewStatus: InterviewStatus | null;
}

const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  onClose,
  interviewStatus,
}) => {
  return (
    interviewStatus && (
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#e9e9c0"} m={"1rem"}>
          <ModalHeader>Interview Status</ModalHeader>
          <ModalBody>
            {interviewStatus.status === "Registered" && (
              <Text>
                Hai, {interviewStatus.nama}. Kamu telah mendaftar sebagai calon
                panitia Maxima 2024. Silahkan cek berkala untuk mendapatkan
                informasi lebih lanjut.
              </Text>
            )}

            {interviewStatus.status === "Interview" && (
              <>
                <Text>
                  Hai, {interviewStatus.nama}. Selamat, kamu telah berhasil
                  lanjut ke tahap interview. Berikut ini jadwal interviewmu :
                </Text>

                <Text fontWeight={"bold"}>
                  Ruangan : {interviewStatus.ruangan}
                </Text>
                <Text fontWeight={"bold"}>
                  Tanggal : {interviewStatus.tanggal}
                </Text>

                <Text>Silahkan datang tepat waktu.</Text>
              </>
            )}

            {interviewStatus.status === "Accepted" && (
              <Text>
                Selamat,{" "}
                <Text as={"span"} fontWeight={"bold"}>
                  {interviewStatus.nama}
                </Text>
                . Kamu telah diterima sebagai panitia Maxima 2024 di divisi{" "}
                <Text as={"span"} fontWeight={"bold"}>
                  {interviewStatus.divisiFinal}
                </Text>
                . Kami tunggu kehadiranmu di panitia Maxima 2024.
              </Text>
            )}

            {interviewStatus.status === "Rejected" && (
              <Text>
                Maaf, {interviewStatus.nama}. Kamu belum berkesempatan menjadi
                panitia Maxima 2024. Tetap semangat dan jangan menyerah!
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              // bgColor={"#F59D00"}
              // color={"white"}
              // _hover={{
              //   bgColor: "#E79200",
              // }}
              colorScheme="red"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
};

export default ResultModal;
