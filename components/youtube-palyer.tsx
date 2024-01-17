"use client";

import { FaTimes } from "react-icons/fa";
import YouTube from "react-youtube";

type Modal = {
  isOpen: boolean;
  videoId: string;
};

interface YoutubePlayerProps {
  modal: Modal;
  closeModal: () => void;
}
const YoutubePlayer = ({ modal, closeModal }: YoutubePlayerProps) => {
  return (
    modal.isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex-center-center bg-black/50 z-[99999]">
        <div className="absolute top-4 right-4" onClick={closeModal}>
          <FaTimes className="text-4xl opacity-70 sm:cursor-pointer" />
        </div>
        <YouTube
          videoId={modal.videoId}
          onReady={() => {}}
          opts={{ playerVars: { autoplay: 1 } }}
        />
      </div>
    )
  );
};

export default YoutubePlayer;
