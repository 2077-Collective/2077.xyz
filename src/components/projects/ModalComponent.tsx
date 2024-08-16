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
      className={`bg-black flex justify-around items-start p-4 w-[70%] mx-auto my-[3rem] rounded-md outline-none`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      ariaHideApp={false}
      style={{ overlay: { overflowY: "auto" } }}
    >
      {data ? (
        <div className="">
          <div className="my-4 mx-8 flex flex-col gap-2 items-start">
            <img
              src={data.src}
              alt={data.text}
              width={50}
              className="rounded-md"
            />
            <p>{data.text}</p>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white py-2 px-6 rounded-md"
            >
              Visit
            </a>
            <h2 className="my-8">{contentLabel}</h2>
          </div>
          <div className="">
            <div className="flex justify-around">
              <img
                src={data.src}
                alt={data.text}
                width={250}
                className="rounded-md"
              />
              <img
                src={data.src}
                alt={data.text}
                width={250}
                className="rounded-md"
              />
              <img
                src={data.src}
                alt={data.text}
                width={250}
                className="rounded-md"
              />
            </div>
            <div className="my-4 mx-8 border-[1px] border-white p-2 rounded-md">
              <p>Source: {data.source}</p>
              <div className="flex justify-between">
                <div className="flex-1">
                  <p>Opensource Contributors</p>
                  <p>We couldn't have achieved this without ...</p>
                </div>
                <div className="flex flex-1 justify-around">
                  <img
                    src={data.src}
                    alt={data.text}
                    width={50}
                    className="rounded-full"
                  />
                  <img
                    src={data.src}
                    alt={data.text}
                    width={50}
                    className="rounded-full"
                  />
                  <img
                    src={data.src}
                    alt={data.text}
                    width={50}
                    className="rounded-full"
                  />
                  <img
                    src={data.src}
                    alt={data.text}
                    width={50}
                    className="rounded-full"
                  />
                  <img
                    src={data.src}
                    alt={data.text}
                    width={50}
                    className="rounded-full"
                  />
                  <img
                    src={data.src}
                    alt={data.text}
                    width={50}
                    className="rounded-full"
                  />
                  <img
                    src={data.src}
                    alt={data.text}
                    width={50}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
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
