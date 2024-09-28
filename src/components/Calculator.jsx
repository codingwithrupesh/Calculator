// src/components/Calculator.jsx
import React, { useState } from 'react';
import Button from './Button';

const buttons = [
  { label: 'C', type: 'function' },
  { label: '±', type: 'function' },
  { label: '%', type: 'function' },
  { label: '/', type: 'operator' },
  { label: '7', type: 'number' },
  { label: '8', type: 'number' },
  { label: '9', type: 'number' },
  { label: '*', type: 'operator' },
  { label: '4', type: 'number' },
  { label: '5', type: 'number' },
  { label: '6', type: 'number' },
  { label: '-', type: 'operator' },
  { label: '1', type: 'number' },
  { label: '2', type: 'number' },
  { label: '3', type: 'number' },
  { label: '+', type: 'operator' },
  { label: '0', type: 'number', wide: true },
  { label: '.', type: 'number' },
  { label: '=', type: 'operator' },
];

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (label) => {
    if (label === 'C') {
      setInput('');
    } else if (label === '=') {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (label === '±') {
      setInput((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
    } else {
      setInput((prev) => prev + label);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="mb-4 bg-gray-200 text-right p-4 rounded text-2xl min-h-[3rem]">
        {input || '0'}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            label={btn.label}
            type={btn.type}
            wide={btn.wide}
            onClick={() => handleClick(btn.label)}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
