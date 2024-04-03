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
    }
  };

  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-sn bg-bgGrayColor border border-gray-800 p-2 sm:p-4">
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

      <div className="relative h-80" style={{ width: "30rem" }}>
        <div className="absolute top-0 ">
          <img
            src={images?.[currentIndex]}
            alt={project?.title}
            className="rounded-sm object-cover text-grayColor"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
