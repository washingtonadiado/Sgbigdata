import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconContainerProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  shape?: 'square' | 'rounded' | 'circle';
  className?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'default',
  shape = 'rounded',
  className
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const variantClasses = {
    default: 'bg-muted',
    primary: 'bg-primary/5',
    secondary: 'bg-secondary/5'
  };

  const shapeClasses = {
    square: 'rounded-none',
    rounded: 'rounded-lg',
    circle: 'rounded-full'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  return (
    <div className={cn(
      'flex items-center justify-center flex-shrink-0',
      sizeClasses[size],
      variantClasses[variant],
      shapeClasses[shape],
      className
    )}>
      <Icon className={cn('text-primary', iconSizes[size])} />
    </div>
  );
};

export default IconContainer;