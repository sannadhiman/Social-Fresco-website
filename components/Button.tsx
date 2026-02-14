import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-fresco-blue hover:bg-blue-800 hover:shadow-lg focus:ring-fresco-blue",
    secondary: "border-transparent text-fresco-blue bg-fresco-yellow hover:bg-yellow-400 hover:shadow-lg focus:ring-fresco-yellow",
    outline: "border-fresco-blue text-fresco-blue bg-transparent hover:bg-fresco-blue hover:text-white focus:ring-fresco-blue",
    dark: "border-transparent text-white bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:ring-gray-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};