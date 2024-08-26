import React, { useState } from 'react';

const Carousel = ({ pages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstPage = currentIndex === 0;
    const newIndex = isFirstPage ? pages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPage = currentIndex === pages.length - 1;
    const newIndex = isLastPage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    // Изменения в этой части: добавлены классы для управления шириной, высотой и центрирования.
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-4/5 h-4/5 p-8 bg-white rounded-lg shadow-lg overflow-hidden relative">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={goToPrevious}
              className="absolute left-0 ml-4 md:ml-10 lg:ml-16 z-10 bg-white p-4"
            >
              Previous
            </button>
            {page}
            <button
              onClick={goToNext}
              className="absolute right-0 mr-4 md:mr-10 lg:mr-16 z-10 bg-white p-4"
            >
              Next
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;