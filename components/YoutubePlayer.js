import { FaTimes } from "react-icons/fa";
import YouTube from "react-youtube";
const YoutubePlayer = ({ modal, closeModal }) => {
  console.log(modal.videoId);
  const onReady = (e) => {
    console.log(e.target);
  };
  return (
    modal.isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex-center-center bg-black/50 z-[999]">
        <div className="absolute top-4 right-4" onClick={closeModal}>
          <FaTimes className="text-4xl opacity-70 sm:cursor-pointer" />
        </div>
        <YouTube
          videoId={modal.videoId}
          onReady={onReady}
          opts={{ playerVars: { autoplay: 1 } }}
        />
      </div>
    )
  );
};

export default YoutubePlayer;
