import Modal from 'react-modal';
import Image from "next/image";
interface ModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    imageSrc: string;
  }
export default function DesignModal({ isModalOpen, closeModal, imageSrc }: ModalProps) {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Expanded Image"
            className="flex items-center justify-center"
            overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div className="bg-white rounded-md p-0 max-w-90vw max-h-90vh relative">
                <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className=" flex items-center justify-center">
                    <Image width={1500} height={1060} src={imageSrc} alt="content" className="max-w-full max-h-full" />
                </div>
            </div>
        </Modal>
    );
}