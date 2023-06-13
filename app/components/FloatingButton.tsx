'use client';

import React from 'react';

export default function FloatingButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="lg:hidden btn btn-circle btn-primary btn-lg fixed bottom-4 right-2"
      onClick={handleClick}
    >
      Top
    </button>
  );
}
