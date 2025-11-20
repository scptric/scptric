import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-bold text-lg border-2 transition-all duration-200 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none uppercase tracking-wider";
  
  const variants = {
    primary: "bg-scptric-blue text-white border-white shadow-neo-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#FFFFFF]",
    secondary: "bg-white text-black border-scptric-blue shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#0057d9]",
    outline: "bg-transparent text-white border-white shadow-none hover:bg-white hover:text-black",
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