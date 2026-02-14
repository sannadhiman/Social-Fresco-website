import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto px-4">
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-20 mx-auto rounded-full mb-6 ${light ? 'bg-fresco-yellow' : 'bg-fresco-blue'}`}></div>
      )}
      {subtitle && (
        <p className={`text-lg md:text-xl ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};