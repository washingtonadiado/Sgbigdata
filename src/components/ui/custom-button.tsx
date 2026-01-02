import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'navy';
  size?: 'sm' | 'md' | 'lg';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  href,
  onClick,
  className,
  variant = 'primary',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'custom-button-sm',
    md: 'custom-button-md', 
    lg: ''
  };

  const variantClasses = {
    primary: '',
    secondary: 'custom-button-secondary',
    navy: 'custom-button-navy'
  };

  const classes = cn(
    'custom-button',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link to={href} className="no-underline">
        <span className={classes}>
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default CustomButton;