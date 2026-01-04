import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Icon3DProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'navy';
}

const Icon3D: React.FC<Icon3DProps> = ({ 
  icon: IconComponent, 
  className, 
  size = 'md',
  variant = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variantClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    navy: 'text-navy'
  };

  return (
    <div className="icon-3d-container relative">
      <div className={cn(
        "icon-3d-wrapper relative transition-all duration-300 ease-out",
        "hover:scale-110 hover:-translate-y-1",
        "transform-gpu perspective-1000"
      )}>
        {/* Shadow layer */}
        <div className={cn(
          "absolute inset-0 rounded-lg opacity-20 blur-sm",
          "bg-gradient-to-br from-current to-transparent",
          "transform translate-y-2 scale-95",
          variantClasses[variant]
        )} />
        
        {/* Main icon with 3D effect */}
        <div className={cn(
          "relative z-10 rounded-lg p-2",
          "bg-gradient-to-br from-white/20 to-white/5",
          "backdrop-blur-sm border border-white/10",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300 ease-out",
          "hover:bg-gradient-to-br hover:from-white/30 hover:to-white/10"
        )}>
          <IconComponent 
            className={cn(
              sizeClasses[size],
              variantClasses[variant],
              "drop-shadow-sm",
              className
            )} 
          />
        </div>
        
        {/* Highlight effect */}
        <div className={cn(
          "absolute top-0 left-0 w-full h-1/2 rounded-t-lg",
          "bg-gradient-to-b from-white/20 to-transparent",
          "pointer-events-none opacity-0 hover:opacity-100",
          "transition-opacity duration-300"
        )} />
      </div>
    </div>
  );
};

export default Icon3D;