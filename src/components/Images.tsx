import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Images = ({ slides }: { slides: { url: string; title: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  console.log("currentIndex", currentIndex);

  return (
    <div className="relative h-full">
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-600 text-3xl z-10 cursor-pointer"
        onClick={goToPrevious}
      >
        <IoMdArrowDropleft />
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-600 text-3xl z-10 cursor-pointer"
        onClick={goToNext}
      >
        <IoMdArrowDropright />
      </div>
      <div
        className="w-full h-full !transition-opacity !duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "2px",
        }}
      ></div>
    </div>
  );
};

export default Images;
