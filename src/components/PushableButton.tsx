import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming we still want to use shadcn's Button props

interface PushableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PushableButton: React.FC<PushableButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`pushable ${className}`} {...props}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">
        {children}
      </span>
    </button>
  );
};

export default PushableButton;
