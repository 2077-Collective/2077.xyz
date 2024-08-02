import { SidebarCloseIcon } from "lucide-react";
import React from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  data: {
    id: number;
    src: string;
    text: string;
    source: string;
    link: string;
  } | null;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  data,
}) => {
  return (
    <Modal
      className={`bg-black flex justify-around items-start py-4 w-[40%] mx-auto mt-[5rem] rounded-md outline-none`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      {data ? (
        <div className="flex flex-col items-center gap-2">
          <h2>{contentLabel}</h2>
          <img
            src={data.src}
            alt={data.text}
            width={350}
            className="rounded-md"
          />
          <p>{data.text}</p>
          <p>Source: {data.source}</p>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </div>
      ) : (
        <div>No data available</div>
      )}
      <button onClick={onRequestClose} className="pt-4">
        <SidebarCloseIcon />
      </button>
    </Modal>
  );
};

export default ModalComponent;
