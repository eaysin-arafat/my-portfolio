import { useState } from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Project } from "../data/project";

const ImageSlider = ({ project }: { project: Project }) => {
  const images = project?.image;
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-sn p-2 sm:p-4">
      <button
        onClick={previous}
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center"
      >
        <RiArrowLeftSFill className="text-2xl font-bold text-gray-500" />
      </button>

      <button
        onClick={forward}
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center"
      >
        <RiArrowRightSFill className="text-2xl font-bold text-gray-500" />
      </button>

      <div className="relative h-80 min-w-full" style={{ width: "30rem" }}>
        <div
          className={`absolute top-0 border border-gray-800 h-full w-full ${
            !images?.length && "px-2 py-2"
          }`}
        >
          <img
            src={images?.[currentIndex]}
            alt={
              !images?.length
                ? "These are government projects for which I don't have permission to use or copy any content"
                : project?.title
            }
            className="min-w-full min-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
