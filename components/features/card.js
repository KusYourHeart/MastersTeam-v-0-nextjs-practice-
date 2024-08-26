import React from 'react';

const Card = ({ isActive, content, onClick }) => {
  return (
    <div
      className={`h-96 w-64 relative p-4 transition-all transform cursor-pointer ${isActive ? 'scale-110 z-30' : 'scale-90 opacity-75'} mx-2`}
      onClick={onClick}
    >
      <div className="h-full bg-white rounded shadow-lg p-5">
        {content}
      </div>
    </div>
  );
};

export default Card;