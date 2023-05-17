import React from 'react';

import clsx from 'clsx';

interface ITextHeadingProps {
  centered?: boolean;
  children: React.ReactNode;
}

export default function TextHeading({ centered, children }: ITextHeadingProps) {
  return (
    <div
      className={clsx('text-6xl font-bold', {
        'text-center': centered,
      })}
    >
      {children}
    </div>
  );
}
