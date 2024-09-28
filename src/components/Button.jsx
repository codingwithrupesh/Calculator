// src/components/Button.jsx
import React from 'react';

function Button({ label, type, wide, onClick }) {
  let baseClasses =
    'flex items-center justify-center text-xl font-semibold rounded shadow-md cursor-pointer';

  let typeClasses = '';

  switch (type) {
    case 'number':
      typeClasses = 'bg-gray-300 hover:bg-gray-400';
      break;
    case 'operator':
      typeClasses = 'bg-orange-500 text-white hover:bg-orange-600';
      break;
    case 'function':
      typeClasses = 'bg-gray-400 hover:bg-gray-500';
      break;
    default:
      typeClasses = 'bg-gray-300 hover:bg-gray-400';
  }

  let widthClasses = wide ? 'col-span-2' : '';

  return (
    <button
      className={`${baseClasses} ${typeClasses} ${widthClasses} h-16`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
