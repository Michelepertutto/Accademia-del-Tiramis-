import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

const Controls: React.FC<ControlsProps> = ({ currentSlide, totalSlides, onNext, onPrev }) => {
  return (
    <div className="fixed bottom-6 right-6 flex items-center space-x-4 z-50 bg-coffee-900/90 p-3 rounded-full shadow-2xl backdrop-blur-sm border border-coffee-700">
      <span className="text-coffee-200 text-sm font-sans mr-2">
        {currentSlide + 1} <span className="text-coffee-600">/</span> {totalSlides}
      </span>
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="p-2 rounded-full hover:bg-coffee-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-cream-50"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full hover:bg-coffee-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-cream-50"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Controls;