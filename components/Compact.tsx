// components/Compact.tsx
import React, { ReactNode, Children } from 'react';

export default function Compact({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:py-16">
      <div className="space-y-12 sm:space-y-16">
        {Children.map(children, (child, index) => (
          <div key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
